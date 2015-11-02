export default function($scope, $log, $q, $wpApiPosts, $stateParams, CONFIG) {
    'ngInject';

    var isLoadingMore = false,
        vm = this;
    vm.categoryName = $stateParams.name;
    vm.categoryPosts = [];
    vm.loadMore = ionic.throttle(doLoadMore, 100);
    vm.refresh = refresh;

    $scope.$on('$ionicView.loaded', init);

    $log.info('category:' + $stateParams.id);

    function init() {
        vm.page = 1;
        vm.isPaginationOver = false;
    }

    function refresh() {
        init();

        vm.categoryPosts = null;
        vm.loadMore().finally(() => $scope.$broadcast('scroll.refreshComplete'));
    }


    function doLoadMore() {
        // prevent multiple call when the server takes some time to answer
        if (isLoadingMore || vm.isPaginationOver) {
            return $q.when(null);
        }
        isLoadingMore = true;
        return getPosts(vm.page).then((response) => {
            vm.page++;
            vm.categoryPosts = (vm.categoryPosts) ? vm.categoryPosts.concat(response.data) : response.data;
            vm.isPaginationOver = response.isPaginationOver;
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }).finally(() => isLoadingMore = false);
    }

    function getPosts(page) {
        return $wpApiPosts.getList({
            page: page,
            "filter[posts_per_page]": CONFIG.posts.posts_per_page,
            "filter[category_name]": vm.categoryName,
            "filter[orderby]": CONFIG.posts.orderby,
            "filter[order]": CONFIG.posts.order,
            "filter[post_status]": CONFIG.posts.post_status
        }).then((response) => {
            // Check if we reached the last page
            response.isPaginationOver = (response.data.length == 0 || response.data.length < CONFIG.posts.posts_per_page);
            return response;
        });
    }
}

export default function ($scope, $log, $wpApiPosts, $wpApiUsers, $stateParams) {
    'ngInject';
    var vm = this;
    vm.post = null;
    vm.author = null;
    $scope.$on('$ionicView.loaded', init);


    function init() {
        $wpApiPosts.get($stateParams.id).then((response) => {
            vm.post = response.data;

            if (vm.post.author != null) {
                $wpApiUsers.get(vm.post.author).then((response) => {
                    vm.author = response.data;
                });
            }
        });
    }

    $scope.GotoLink = function (url) {
        window.open(link,'_system');
    }
}

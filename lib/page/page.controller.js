export default function ($scope, $log, $wpApiPages, $wpApiUsers, $stateParams) {
    'ngInject';
    var vm = this;
    vm.page = null;
    vm.author = null;
    $scope.$on('$ionicView.loaded', init);

    function init() {
        $wpApiPages.get($stateParams.id).then((response) => {
            vm.page = response.data;

            $wpApiUsers.get(vm.post.author).then((response) => {
                vm.author = response.data;
            });
        });
    }
}

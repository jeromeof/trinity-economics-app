export default function ($scope, $log, $wpApiPages, $wpApiUsers, $stateParams, $sanitize) {
    'ngInject';
    var vm = this;
    vm.page = null;
    vm.author = null;
    $scope.$on('$ionicView.loaded', init);

    function init() {
        $wpApiPages.get($stateParams.id).then((response) => {
            vm.page = response.data;
            if (vm.page.author != null) {
                $wpApiUsers.get(vm.page.author).then((response) => {
                    vm.author = response.data;
                });
            }
        });
    }
}

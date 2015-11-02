export default function ($scope, $log, $wpApiTerms, $wpApiPages, $ionicSideMenuDelegate, $stateParams) {
    'ngInject';
    var vm = this;
    vm.categories = null;
    vm.pages = null;

    $scope.$watch(function() { return $ionicSideMenuDelegate.isOpen(); }, init);

    function init() {
        $wpApiTerms.getCategoryList().then((response) => {
            vm.categories = response.data;
        });
        $wpApiPages.getList().then((response) => {
            vm.pages = response.data;
        });
    }
}

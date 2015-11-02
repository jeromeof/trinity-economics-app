export default function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('root.category', {
        url: "/category/:name",
        views: {
            'content@root': {
                template: require("./category.html"),
                controller: "CategoryController as categoryCtrl"
            }
        }
    });
}

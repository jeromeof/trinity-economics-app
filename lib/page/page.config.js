export default function($stateProvider) {
    'ngInject';
    $stateProvider.state('root.page', {
        url: "/page/:id",
        views: {
            'content@root': {
                template: require("./page.html"),
                controller: "PageController as pageCtrl"
            }
        }
    });
}

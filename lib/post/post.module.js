import modConfig from './post.config';
import modController from './post.controller';

let mod = angular.module('prototype.post', [
    'ionic',
    'ui.router',
    'prototype.constant',
    'wp-api-angularjs',
    'ngSanitize'
]);

mod.config(modConfig);
mod.controller('PostController', modController);

mod.filter('hrefToJS', function ($sce, $sanitize) {
    return function (text) {
        var regex = /href="([\S]+)"/g;
        var replacementText = "onClick=\"window.open('$1', '_blank', 'location=yes')\"";
        var replacementText1 = "class=\"text-underline\" " + replacementText;
//        var regex2 = /<iframe width="[0-9]+" height="[0-9]+" src="([\S]+)" frameborder="0" allowfullscreen><\/iframe>/g;
//        var replacementText2 = "<a class=\"button button-small\" " + replacementText + ">$1</a>";

        var newString =text.replace(regex, replacementText1);//.replace(regex2, replacementText2);

        return $sce.trustAsHtml(newString);
    }
});
export default mod = mod.name

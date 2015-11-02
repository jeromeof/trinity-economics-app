import modConfig from './page.config.js';
import modController from './page.controller.js';

let mod = angular.module('prototype.page', [
    'ionic',
    'ui.router',
    'prototype.constant',
    'wp-api-angularjs'
]);

mod.config(modConfig);
mod.controller('PageController', modController);

export default mod = mod.name

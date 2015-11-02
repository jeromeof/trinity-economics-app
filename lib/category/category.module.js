import modConfig from './category.config.js';
import modController from './category.controller.js';

let mod = angular.module('prototype.category', [
    'ionic',
    'ui.router',
    'prototype.constant',
    'wp-api-angularjs'
]);

mod.config(modConfig);
mod.controller('CategoryController', modController);

export default mod = mod.name

import modConfig from './menu.config';
import modController from './menu.controller';

let mod = angular.module('prototype.menu', [
    'ionic',
    'ui.router',
    'prototype.constant',
    'wp-api-angularjs'
]);

mod.config(modConfig);
mod.controller('MenuController', modController);

export default mod = mod.name;

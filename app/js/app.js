/*globals angular, console */
"use strict";

var angular = require('angular');

var TestCtrl = require('./controllers/TestCtrl');
var AccordionDirective = require('./directives/AccordionDirective');
var RestResource = require('./services/RestResource');
var AccordionService = require('./services/AccordionService');

console.log(AccordionDirective.name);
console.log(RestResource.name);
console.log(AccordionService.name);

var app = angular.module('myApp', [AccordionDirective.name, RestResource.name, AccordionService.name]);

app.controller('TestCtrl', ['$scope', 'DataResource', 'AccordionService', TestCtrl]);

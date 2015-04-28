/*globals angular, console */
"use strict";

var angular = require('angular');

var AccordionCtrl = require('./controllers/AccordionCtrl');
var AccordionDirective = require('./directives/AccordionDirective');
var RestResource = require('./services/RestResource');
var AccordionService = require('./services/AccordionService');

var app = angular.module('myApp', [AccordionDirective.name, RestResource.name, AccordionService.name]);

app.controller('AccordionCtrl', ['$scope', 'DataResource', 'AccordionService', AccordionCtrl]);

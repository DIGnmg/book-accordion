/*globals angular, console */
"use strict";

var angular = require('angular');

var AccordionCtrl = require('./controllers/AccordionCtrl');
var AccordionDirective = require('./directives/AccordionDirective');
var RestResource = require('./services/RestResource');
var LibraryService = require('./services/LibraryService');

var app = angular.module('myApp', [AccordionDirective.name, RestResource.name, LibraryService.name]);

app.controller('AccordionCtrl', ['$scope', 'DataResource', 'LibraryService', AccordionCtrl]);

/*globals angular, console */
"use strict";

var angular = require('angular');
var ngAnimate = require('angular-animate');

// angular.module('myApp', [require('angular-animate')]);

var AccordionCtrl = require('./controllers/AccordionCtrl');
var AccordionDirective = require('./directives/AccordionDirective');
var ListDirective = require('./directives/ListDirective');
var RestResource = require('./services/RestResource');
var LibraryService = require('./services/LibraryService');

var app = angular.module('myApp', [ngAnimate, AccordionDirective.name, ListDirective.name, RestResource.name, LibraryService.name]);

app.controller('AccordionCtrl', ['$scope', 'DataResource', 'LibraryService', AccordionCtrl]);

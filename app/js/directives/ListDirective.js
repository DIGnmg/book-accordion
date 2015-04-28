/*globals angular, console */
"use strict";

var ListDirective = angular.module('ListDirective', [])
.directive('listDirective', ['$document', '$timeout', 'LibraryService', function ListDirective($document, $timeout, LibraryService) {
  return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'templates/list-item.html',
		transclude: true,
		link: function($scope, el, attrs, controller) {
			attrs.listDirective = LibraryService.tabName;
			LibraryService.setActiveTab(attrs.listDirective);
		}
	};
}]);

module.exports = ListDirective;
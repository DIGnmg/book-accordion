/*globals angular, console */
"use strict";

var Accordion = angular.module('AccordionDirective', [])
.directive('accordion', ['$document', 'DataResource', 'LibraryService' , function Accordion($document, DataResource, LibraryService) {
  return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'templates/accordion.html',
		link: function($scope, el, iAttrs, controller) {
			// console.log('el', el);
			// console.log('controller', el);
		}
	};
}]);

module.exports = Accordion;
/*globals angular, console */
"use strict";

var Accordion = angular.module('AccordionDirective', [])
.directive('accordion', ['$document', '$timeout' , function Accordion($document, $timeout) {
  return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'templates/accordion.html',
		transclude: true,
		link: function($scope, el, iAttrs, controller) {
			// console.log('el', el);
			// console.log('controller', el);
			$timeout(function(){
				// el.addClass('come-in');
				// var ListItems = el.find("li");
				// console.log(el.children("li"));
				// console.log(el.children());
				// ListItems.addClass('come-in');
			}, 500);
		}
	};
}]);

module.exports = Accordion;
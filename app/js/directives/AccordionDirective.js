/*globals angular, console */
"use strict";

var Accordion = angular.module('AccordionDirective', [])
.directive('accordion', ['$document', 'DataResource', 'AccordionService' , function Accordion($document, DataResource, AccordionService) {
  return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<ul><li ng-click="selectGenre(data)" ng-repeat="data in data track by $index">Genre: {{data.name}}</li></ul> \
					<div><ul><li ng-click="selectAuthor(author)" ng-repeat="author in authors track by $index">Author: {{author.name}}</li></ul></div> \
					<div><ul><li ng-repeat="book in books track by $index">Book: {{book.name}}</li></ul></div>',
		link: function($scope, el, iAttrs, controller) {
			
			console.log('el', el);
			console.log('controller', el);
		}
	};
}]);

module.exports = Accordion;
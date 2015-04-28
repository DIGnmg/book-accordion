/*globals angular, console */
"use strict";

var ListDirective = angular.module('ListDirective', [])
.directive('listDirective', ['$document', '$timeout', 'LibraryService', function ListDirective($document, $timeout, LibraryService) {
  return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'templates/list-item.html',
		transclude: true,
		link: function($scope, el, iAttrs, controller) {
			// console.log('el', el);
			// console.log('iAttrs', iAttrs);
			// console.log(el.children());
			$timeout(function(){
				el.addClass('come-in');
				// console.log(el.children());
				// el.children().addClass('come-in');
			}, 500);

			el.bind('click', function(){
				// LibraryService.remove();
				// el.children().removeClass('come-in');
				// el.children().addClass('come-out');
			});
			
		}
	};
}]);

module.exports = ListDirective;
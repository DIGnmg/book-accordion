/*globals angular, console */
"use strict";

var ItemDirective = angular.module('ItemDirective', [])
.directive('itemDirective', ['$document', '$timeout' , function itemDirective($document, $timeout) {
  return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		link: function($scope, el, attrs, controller) {
			el.bind('click', function(e){
				console.log('BOOM!',el);
				el.addClass('come-in');
			});
		}
	};
}]);

module.exports = ItemDirective;
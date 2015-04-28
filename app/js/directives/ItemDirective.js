/*globals angular, console */
"use strict";

var ItemDirective = angular.module('ItemDirective', [])
.directive('itemDirective', ['$document', '$timeout', 'LibraryService', function itemDirective($document, $timeout, LibraryService) {
  return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		link: function($scope, el, attrs, controller) {
			el.bind('click', function(e){
				console.log('BOOM!',el);
				console.log('e!',e);
				el.addClass('come-in');
				attrs.$set('itemDirective', 'test')
				console.log(attrs);
				// ng-click="selectItem(data, activeTab)"
				// LibraryService.getData(data).then(function(response){
				// 	$scope.animate = true;
				// 	$scope.selectedItem = LibraryService.getSelectedItem();
				// 	$scope.data = response;
				// });
			});
			console.log(attrs);
		}
	};
}]);

module.exports = ItemDirective;
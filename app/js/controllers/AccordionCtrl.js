/*globals angular, console */
"use strict";

var AccordionCtrl = function($scope, DataResource, LibraryService) {

	$scope.dataTierOne = {};

	$scope.selectItem = function(data) {
		$scope.animate = false;
		LibraryService.getData(data).then(function(response){
			$scope.animate = true;
			$scope.selectedItem = LibraryService.getSelectedItem();
			$scope.data = response;
		});
	}

	DataResource.getCategories().then(function(response){
		$scope.animate = true;
		$scope.data = response.data;
	});
};

module.exports = AccordionCtrl;
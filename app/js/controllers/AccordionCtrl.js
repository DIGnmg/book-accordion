/*globals angular, console */
"use strict";

var AccordionCtrl = function($scope, DataResource, LibraryService) {

	$scope.selectItem = function(data, tabName) {
		if(LibraryService.getActiveTab() !== 'book'){
			$scope.animate = false;
			LibraryService.getData(data).then(function(response){
				$scope.animate = true;
				$scope.selectedItem = LibraryService.getSelectedItem();
				$scope.data = response;
			});
		} else {
			LibraryService.selectBook(data);
		}
	}

	$scope.getGenres = function (){
		$scope.animate = false;
		LibraryService.getGenres().then(function(response){
			$scope.animate = true;
			$scope.selectedItem = LibraryService.getSelectedItem();
			$scope.data = response;
		});
	}
	$scope.getAuthors = function (){
		if(LibraryService.getActiveTab() === 'book'){
			$scope.animate = false;
			LibraryService.getAuthors().then(function(response){
				$scope.animate = true;
				$scope.data = response;
			});
		}
	}
	LibraryService.getGenres().then(function(response){
		$scope.animate = true;
		$scope.selectedItem = LibraryService.getSelectedItem();
		$scope.activeTab = LibraryService.getActiveTab();
		$scope.data = response;
	});
};

module.exports = AccordionCtrl;
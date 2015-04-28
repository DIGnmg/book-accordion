/*globals angular, console */
"use strict";

var AccordionCtrl = function($scope, DataResource, LibraryService) {
	

	$scope.selectGenre = function (category){
		$scope.books = {};
		LibraryService.selectCategory(category).then(function(response){
			$scope.selectedGenre = LibraryService.selectedCategory;
			$scope.authors = response;
		});
	}

	$scope.selectAuthor = function(author) {
		LibraryService.selectAuthor(author).then(function(response){
			$scope.selectedAuthor = LibraryService.selectedAuthor;
			$scope.books = response;
		});
	}

	DataResource.getCategories().then(function(response){
		$scope.data = response.data;
	});
};

module.exports = AccordionCtrl;
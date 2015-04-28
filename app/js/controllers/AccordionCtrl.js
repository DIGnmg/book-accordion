/*globals angular, console */
"use strict";

var AccordionCtrl = function($scope, DataResource, AccordionService) {
	$scope.testVar = 'We are up and running from a required module!';
	$scope.customer = {
		name: 'Naomi',
		address: '1600 Amphitheatre'
	};

	$scope.selectGenre = function (category){
		console.log(category);
		$scope.books = {};
		AccordionService.selectCategory(category).then(function(response){
			$scope.authors = response;
		});
		// $scope.getSelected();
	}

	$scope.selectAuthor = function(author) {
		AccordionService.selectAuthor(author).then(function(response){
			$scope.books = response;
		});
	}

	DataResource.getCategories().then(function(response){
		console.log(response);
		$scope.data = response.data;
	});
};

module.exports = AccordionCtrl;
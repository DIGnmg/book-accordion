/*globals angular, console */
"use strict";

var TestCtrl = function($scope, DataResource, AccordionService) {
	$scope.testVar = 'We are up and running from a required module!';
	$scope.customer = {
		name: 'Naomi',
		address: '1600 Amphitheatre'
	};

	$scope.getSelected = function (){
		console.log(AccordionService.getSelectedCategory());
	};

	DataResource.getCategories().then(function(response){
		console.log(response);
		$scope.data = response.data;
	});
	
	$scope.getAuthors = function(){
		DataResource.getAuthors().then(function (response) {
			console.log(response);
			$scope.authors = response.data;
		});
	};


};

module.exports = TestCtrl;
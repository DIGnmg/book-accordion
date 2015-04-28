/*globals angular, console */
"use strict";

var AccordionService = angular.module('AccordionService', [])
.service('AccordionService', ['$http','$q', 'DataResource', function AccordionService($http, $q, DataResource) {
	
	return {
		selectedCategory: {},
		selectedAuthor: {},
		selectedItem: {},
		filterData: function(dataset, id){
			var selectedArray = []; 
			angular.forEach(dataset, function (data) {
				if (data.category_id === id){
					selectedArray.push(data);
				}
				console.log(selectedArray);
			});
			return selectedArray;
		},
		selectCategory: function (category) {
			console.log('click', category);
			this.selectedItem = category;
			return DataResource.getAuthors(this.selectedItem.id).then(function(response){
				return this.filterData(response.data, category.id);
			}.bind(this));
		},
		getSelectedCategory: function () {
			return this.selectedCategory;
		},
		selectAuthor: function(author){
			console.log('click', author);
			this.selectedItem = author;
			return DataResource.getBooks(this.selectedItem.id).then(function(response){
				return this.filterData(response.data, author.id);
			}.bind(this));
		}
	};

}]);

module.exports = AccordionService;
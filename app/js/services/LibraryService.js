/*globals angular, console */
"use strict";

var LibraryService = angular.module('LibraryService', [])
.service('LibraryService', ['$http','$q', 'DataResource', function LibraryService($http, $q, DataResource) {

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
			this.selectedItem = category;
			this.selectedCategory = category;
			return DataResource.getAuthors(this.selectedItem.id).then(function(response){
				return this.filterData(response.data, category.id);
			}.bind(this));
		},
		getSelectedCategory: function () {
			return this.selectedCategory;
		},
		selectAuthor: function(author){
			this.selectedItem = author;
			this.selectedAuthor = author;
			return DataResource.getBooks(this.selectedItem.id).then(function(response){
				return this.filterData(response.data, author.id);
			}.bind(this));
		}
	};

}]);

module.exports = LibraryService;
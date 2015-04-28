/*globals angular, console */
"use strict";

var LibraryService = angular.module('LibraryService', [])
.service('LibraryService', ['$http','$q', 'DataResource', function LibraryService($http, $q, DataResource) {

	return {
		selectedItem: {
			genre: {},
			author: {},
			book: {}
		},
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
		getSelectedItem: function(){
			return this.selectedItem;
		},
		getData: function (data){
			var fn = DataResource[data.meta];
			return fn().then(function(response){
				this.selectedItem[data.meta] = data;
				return this.filterData(response.data, data.id);
			}.bind(this));
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
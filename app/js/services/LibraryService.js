/*globals angular, console */
"use strict";

var LibraryService = angular.module('LibraryService', [])
.service('LibraryService', ['$http','$q', 'DataResource', function LibraryService($http, $q, DataResource) {

	return {
		selectedItem: {
			genre: {name:"Genre"},
			author: {name:"Author"},
			book: {name:"Book"}
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
				this.setActiveTab(response.data[0].meta);
				return this.filterData(response.data, data.id);
			}.bind(this));
		},
		getBooks: function(){
			return DataResource.getBooks().then(function(response){
				this.setActiveTab(response.data[0].meta);
				return response;
			}.bind(this));
		},
		getGenres: function(){
			return DataResource.getCategories().then(function(response){
				this.setActiveTab(response.data[0].meta);
				return response.data;
			}.bind(this));
		},
		getAuthors: function(){
			return DataResource.getAuthors().then(function(response){
				this.setActiveTab(response.data[0].meta);
				return this.filterData(response.data, this.selectedItem.genre.id);
			}.bind(this));
		},
		setActiveTab: function(name){
			this.tabName = name;
		},
		getActiveTab: function(){
			return this.tabName;
		}
	};

}]);

module.exports = LibraryService;
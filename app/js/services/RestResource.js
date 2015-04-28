/*globals angular, console */
"use strict";

var RestResource = angular.module('RestResource', [])
.service('DataResource', ['$http','$q', function RestResource($http, $q) {
	
	var filterAuthors = function(dataset, categoryId){
		var selectedAuthors = []; 
		angular.forEach(dataset, function (data) {
			if (data.category_id === categoryId){
				selectedAuthors.push(data);
			}
			console.log(selectedAuthors);
		});
		return selectedAuthors;
	}
	var filterBooks = function(dataset, authorId){
		var selectedBooks = []; 
		angular.forEach(dataset, function (data) {
			if (data.author_id === authorId){
				selectedBooks.push(data);
			}
			console.log(selectedBooks);
		});
		return selectedBooks;
	}

	return {
		getCategories: function () {
		  return $http({
		    method: 'GET',
		    url: '/data/categories.json'
		  });
		},
		getAuthors: function (categoryId) {
			return $http({
				method: 'GET',
				url: '/data/authors.json'
			}).then(function(response){
				return filterAuthors(response.data, categoryId);
			});
		},
		getBooks: function(authorId){
			return $http({
				method: 'GET',
				url: '/data/books.json'
			}).then(function(response){
				return filterBooks(response.data, authorId);
			});
		}
	};

}]);

module.exports = RestResource;
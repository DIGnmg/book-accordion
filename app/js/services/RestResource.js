/*globals angular, console */
"use strict";

var RestResource = angular.module('RestResource', [])
.service('DataResource', ['$http','$q', function RestResource($http, $q) {
	
	return {
		getCategories: function () {
		  return $http({
		    method: 'GET',
		    url: '/data/categories.json'
		  });
		},
		getAuthors: function () {
			return $http({
				method: 'GET',
				url: '/data/authors.json'
			});
		},
		getBooks: function(){
			return $http({
				method: 'GET',
				url: '/data/books.json'
			});
		}
	};

}]);

module.exports = RestResource;
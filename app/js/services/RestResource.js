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
		genre: function(){
			return $http({
				method: 'GET',
				url: '/data/authors.json'
			});
		},
		author: function(){
			return $http({
				method: 'GET',
				url: '/data/books.json'
			});
		},
		book: function(){
			return $http({
				method: 'GET',
				url: '/data/books.json'
			});
		}
	};

}]);

module.exports = RestResource;
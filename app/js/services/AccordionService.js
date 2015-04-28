/*globals angular, console */
"use strict";

var AccordionService = angular.module('AccordionService', [])
.service('AccordionService', ['$http','$q', 'DataResource', function AccordionService($http, $q, DataResource) {
	return {
		selectedCategory: {},
		selectedAuthor: {},
		select: function (category) {
			console.log('click', category);
			this.selectedCategory = category;
			return DataResource.getAuthors(this.selectedCategory.id);
		},
		getSelectedCategory: function () {
			return this.selectedCategory;
		},
		selectAuthor: function(author){
			console.log('click', author);
			this.selectedAuthor = author;
			return DataResource.getBooks(this.selectedAuthor.id);
		}
	};

}]);

module.exports = AccordionService;
'use strict';
var contactsFilters = angular.module('contactsFilters',[])

contactsFilters.filter('paging', function() {
    return function (items, index, pageSize) {
        if (!items)
            return [];

        var offset = (index - 1) * pageSize;
        return items.slice(offset, offset + pageSize);
    }
});


contactsFilters.filter('size', function() {
    return function (items) {
        if (!items)
            return 0;

        return items.length || 0
    }
});


contactsFilters.filter('orderClass', function() {
    return function (direction) {
        if (direction === -1)
            return "glyphicon-chevron-down";
        else
            return "glyphicon-chevron-up";
    }
});
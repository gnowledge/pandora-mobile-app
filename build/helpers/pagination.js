define([
    "settings"
],

function(settings) {
    var paginationHelper = {
        getNumPages: function(count) {
            var pageSize = settings.pageSize;
            var numPages = Math.ceil(count / pageSize);
            return numPages;
        },//Pagination for total number of pages.
        next: function(page, totalPages) {
            if ((totalPages - 1) > page) {
                return page + 1;
            } else {
                return false;
            }
        },//Pagination for next page.

        prev: function(page) {
            if (page > 0) {
                return page - 1;
            } else {
                return false;
            }
        },//Pagination for prev page.

        getStart: function(page, count) {
            return page * settings.pageSize;
        },//Pagination for Start page.

        getEnd: function(page, count) {
            return (page * settings.pageSize) + settings.pageSize;
            //TODO: FIXME!!! This will give the wrong end if the person is on the last page.
            
        }//Pagination for End page.


    } 

    return paginationHelper;
});
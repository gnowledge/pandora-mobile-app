define([
    "settings"
],

function(settings) {
    var paginationHelper = {
        getNumPages: function(count) {
            var pageSize = settings.pageSize;
            var numPages = Math.ceil(count / pageSize);
            return numPages;
        },
        next: function(page, totalPages) {
            if ((totalPages - 1) > page) {
                return page + 1;
            } else {
                return false;
            }
        },
        prev: function(page) {
            if (page > 0) {
                return page - 1;
            } else {
                return false;
            }
        },
        getStart: function(page, count) {
            return page * settings.pageSize;
        },
        getEnd: function(page, count) {
            return (page * settings.pageSize) + settings.pageSize;
            //TODO: FIXME!!! This will give the wrong end if the person is on the last page.
            
        }


    } 

    return paginationHelper;
});
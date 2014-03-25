define([
	'marionette',
	'views/videoItem',
    'settings',
    'templates',
    "helpers/pagination"
],

//Search Page with Pagination count number of pages,next page & prev page.
function(Marionette, VideoItemView, settings, templates, pagination) {
	var VideoSearchResults = Marionette.CompositeView.extend({
        initialize: function(options) {
            this.count = parseInt(options.count);
            this.page = parseInt(options.page);
            this.queryString = options.queryString;
        },
		itemView: VideoItemView,
        template: templates[settings.templatesBase + "videoSearchResults.html"],
        appendHtml: function(collectionView, itemView) {
            collectionView.$('.videosList').append(itemView.el);
        },
        templateHelpers: function() {
            var numPages = pagination.getNumPages(this.count);
            var next = pagination.next(this.page, numPages);
            var paginationPrev = pagination.prev(this.page);
            if (paginationPrev !== false) {
                var prev = paginationPrev.toString();
            } else {
                var prev = false;
            }
            var start = pagination.getStart(this.page, this.count);
            var end = pagination.getEnd(this.page, this.count);
            return {
                'count': this.count,
                'page': this.page + 1,
                'next': next,
                'prev': prev,
                'start': start,
                'end': end,
                'queryString': this.queryString

            }    
        }
	});

	return VideoSearchResults;
});
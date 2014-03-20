define([
	'marionette',
	'views/videoItem',
    'settings',
    'templates',
    "helpers/pagination"
],

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
            var prev = pagination.prev(this.page);
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

	return VideoSearchResults;//Search Page with Pagination count number of pages,next page & prev page.
});
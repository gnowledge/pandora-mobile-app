define([
	'marionette',
	'views/videoItem',
    'settings',
    'templates',
    "helpers/pagination"
],

//Function for video list view with pagination.
function(Marionette, VideoItemView, settings, templates, pagination) {

	var VideoListView = Marionette.CompositeView.extend({
         initialize: function(options) {
            this.count = parseInt(options.count);
            this.page = parseInt(options.page);
            this.id = options.id;
            this.title = this.id.split(":")[1] //FIXME: if there is a colon in the title, this breaks.
        },

        template: templates[settings.templatesBase + "videoList.html"],
		itemView: VideoItemView,
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
                'id': this.id,
                'title': this.title
                
            }    
        }

	});

	return VideoListView;
});
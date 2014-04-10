define([
    'marionette',
    'underscore',
    'collections/transcripts',
    'views/videoTranscript',
    'settings',
    'templates',
    'views/videoTranscripts',
    "helpers/pagination",
    

],

//Function for video list view with pagination.
function(Marionette, _, Transcripts, VideoTranscriptView, settings, templates,EmptyTranscriptView, pagination) {

    var VideoTransView = Marionette.CompositeView.extend({
         initialize: function(options) {
            this.count = this.collection.length;
            this.page = parseInt(options.page);
            this.id = options.id;
            //this.layers=options.layers;
            this.collection = options.collection;
            this.count = this.collection.length;
            this.start = this.page * 15;
            this.end = (this.page + 1) * 15;
            if (this.count < this.end) {
                this.end = this.count;
            }
            this.next = this.count > this.end ? this.page + 1 : false;
            this.prev = this.start > 0 ? (this.page - 1).toString() : false;
            //GLOB = this.collection;
            var newCollection = new Transcripts(this.collection.slice(this.start, this.end));
            this.collection = newCollection;
            console.log("transcripts", this.collection)
            
        },

        template: templates[settings.templatesBase + "videoTrans.html"],
        itemView: VideoTranscriptView,
        emptyView: EmptyTranscriptView,
        
        appendHtml: function(collectionView, itemView) {
            collectionView.$('.videosTranscript').append(itemView.el);    
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
                'next': this.next,
                'prev': this.prev,
                'start': this.start,
                'end': this.end,
                'id': this.id
                //'layers':this.layers
                
            }    
        }

    });

    return VideoTransView;
});
define([
	'marionette',
	'views/videoTranscript',
    'views/emptyTranscript'
    //'views/videoTrans'
],
//Empty transcript view.
function(Marionette, VideoTranscriptView, EmptyTranscriptView/*,VideoTransView*/) {

	var VideoTranscriptsView = Marionette.CollectionView.extend({
		itemView: VideoTranscriptView,
        emptyView: EmptyTranscriptView
        //pagView:VideoTransView

	});

	return VideoTranscriptsView;
});
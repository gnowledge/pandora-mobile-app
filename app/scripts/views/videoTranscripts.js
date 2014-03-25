define([
	'marionette',
	'views/videoTranscript',
    'views/emptyTranscript'
],
//Empty transcript view.
function(Marionette, VideoTranscriptView, EmptyTranscriptView) {

	var VideoTranscriptsView = Marionette.CollectionView.extend({
		itemView: VideoTranscriptView,
        emptyView: EmptyTranscriptView
	});

	return VideoTranscriptsView;
});
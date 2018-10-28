define([
	'marionette',
	'views/videoTranscript',
    'views/emptyTranscript'
],

function(Marionette, VideoTranscriptView, EmptyTranscriptView) {

	var VideoTranscriptsView = Marionette.CollectionView.extend({
		itemView: VideoTranscriptView,
        emptyView: EmptyTranscriptView
	});

	return VideoTranscriptsView;//Empty transcript view.
});
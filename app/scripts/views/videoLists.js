define([
	'marionette',
	'views/videoListItem'
],


//Function for video list view.
function(Marionette, VideoListItemView) {

	var VideoListsView = Marionette.CollectionView.extend({
		itemView: VideoListItemView
	});

	return VideoListsView;
});
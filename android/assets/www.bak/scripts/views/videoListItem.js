define([
	'marionette',
    "settings",
    "templates"
],

//Function for video list item view.
function(Marionette, settings, templates) {
	var VideoListItemView = Marionette.ItemView.extend({
		template: templates[settings.templatesBase + "videoListItem.html"]
	});




	return VideoListItemView;

});
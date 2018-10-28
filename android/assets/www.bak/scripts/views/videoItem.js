define([
	'marionette',
    "settings",
    "templates"
],

//Function for Video item view.
function(Marionette, settings, templates) {
	var VideoItemView = Marionette.ItemView.extend({
		template: templates[settings.templatesBase + "videoItem.html"],

		onRender: function(){
			//console.log('calling foundation');
			//$(document).foundation();
		}
	});

	return VideoItemView;
});
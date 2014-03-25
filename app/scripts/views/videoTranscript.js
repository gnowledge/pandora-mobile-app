define([
	'marionette',
    "settings",
    "templates"
],
// View Video transcript.
function(Marionette, settings, templates) {
	var VideoTranscriptView = Marionette.ItemView.extend({
		template: templates[settings.templatesBase + "videoTranscript.html"]
	});

	return VideoTranscriptView;

});
define([
	'backbone',
	'settings'
],

function(Backbone, settings) {
	var Video = Backbone.Model.extend({
		initialize: function() {
			this.set("videoURL", this.getVideoURL());
			this.set("iconURL", this.getIconURL())
		},

		getVideoURL: function() {
			return settings.pandoraInstance + this.id + "/" + "96p.webm";
		},

		getIconURL: function() {
			return settings.pandoraInstance + this.id + "/" + "icon96.jpg";
		}
	});

	return Video;
});
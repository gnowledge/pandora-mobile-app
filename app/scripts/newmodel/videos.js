define([
	'backbone',
	'settings'
],

function(Backbone, settings) {
	var Videos = Backbone.Model.extend({
		initialize: function() {
			this.set("videosURL96", this.getVideosURL("96"));
			this.set("videosURL240", this.getVideosURL("240"));
			

			this.set("iconURL", this.getIconURL())
		},

		getVideosURL: function(size) {
			return settings.pandoraInstance + this.id + "/" + size + "p.webm";
		},

		getIconURL: function() {
			return settings.pandoraInstance + this.id + "/" + "icon96.jpg";
		}
		

		

		




	});

	return Videos;
}); 
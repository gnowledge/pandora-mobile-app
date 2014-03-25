define([
	'backbone',
	'settings'
],
//Function to set videoURL size & icon.
function(Backbone, settings) {
	var Video = Backbone.Model.extend({
		initialize: function() {
			this.set("videoURL96", this.getVideoURL("96"));
			this.set("videoURL240", this.getVideoURL("240"));
			

			this.set("iconURL", this.getIconURL())
		},

		getVideoURL: function(size) {
		
		return settings.pandoraInstance + this.id + "/" + size + "p.mp4";/*Function to get
		                                                              video player format.*/    
		},																	

		getIconURL: function() {
			return settings.pandoraInstance + this.id + "/" + "icon96.jpg";//Function to get video Icon.
		}
		

		

		




	});

	return Video;
}); 
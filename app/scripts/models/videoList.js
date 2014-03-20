define([
	'backbone',
	'settings'
],

function(Backbone, settings) {
	var VideoList = Backbone.Model.extend({

		initialize: function() {
			this.set('iconURL', this.getIconURL());
			this.set("idUrl", encodeURIComponent(this.id));
		},//Sets Url for icon & id. 
			
		getIconURL: function(size) {
			var size = size || 256;
			return settings.pandoraInstance + 'list/' + this.id + '/icon' + size + '.jpg';//Function to get list of video icon.
		}

	});

	return VideoList;
});
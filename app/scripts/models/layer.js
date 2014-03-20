define([
	'backbone',
	'settings'
],

function(Backbone, settings) {
	var Layer = Backbone.Model.extend({
		initialize: function() {
			this.set("videoId", this.get("id").split("/")[0]);
			this.set("inIcon", this.getInIcon());
			
		},//Sets videoId & inPoint.

		'getInIcon': function() {
			var videoId = this.get("videoId");
			var inPoint = this.get("in");
			return settings.pandoraInstance + videoId + "/96p" + inPoint + ".jpg";//Gets videoId & inPoint.
		}
	});

	return Layer;
});
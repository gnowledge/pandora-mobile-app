define([
    'backbone',
    'marionette',
    "settings",
    "templates"
],

function(Backbone, Marionette, settings, templates) {
    var PlayVideoView = Marionette.ItemView.extend({
        template: templates[settings.templatesBase + "playVideo.html"]
    });

    return PlayVideoView;
});
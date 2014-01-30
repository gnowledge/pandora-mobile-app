define([
    'backbone',
    'marionette',
    "settings",
    "templates"
],

function(Backbone, Marionette, settings, templates) {
    var VideoInfoView = Marionette.ItemView.extend({
        template: templates[settings.templatesBase + "videoInfo.html"]
    });

    return VideoInfoView;
});
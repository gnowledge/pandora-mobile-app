define([
    'marionette',
    "settings",
    "templates"
],

function(Marionette, settings, templates) {
    var EmptyTranscriptView = Marionette.ItemView.extend({
        template: templates[settings.templatesBase + "emptyTranscript.html"]
    });

    return EmptyTranscriptView;

});
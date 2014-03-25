define([
    'marionette',
    "settings",
    "templates"
],
//Function for Empty transcript page.
function(Marionette, settings, templates) {
    var EmptyTranscriptView = Marionette.ItemView.extend({
        template: templates[settings.templatesBase + "emptyTranscript.html"]
    });

    return EmptyTranscriptView;

});
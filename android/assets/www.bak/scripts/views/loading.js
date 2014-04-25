define([
    "backbone",
    "marionette",
    "settings",
    "templates"
],

//Function for loading page view.
function(Backbone, Marionette, settings, templates) {
    var LoadingView = Marionette.ItemView.extend({
        template: templates[settings.templatesBase + "loading.html"]
    });

    return LoadingView;

});
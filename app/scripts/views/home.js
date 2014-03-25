define([
    'backbone',
    'marionette',
    "settings",
    "templates"
],

//Function for Home page view.
function(Backbone, Marionette, settings, templates) {
    var HomeView = Marionette.ItemView.extend({
        template: templates[settings.templatesBase + "home.html"]
    });

    return HomeView;
});
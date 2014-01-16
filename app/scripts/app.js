define([
    "underscore",
    "backbone",
    "marionette",
    "core/router"
],

function (_, Backbone, Marionette, Router) {

    var App = new Backbone.Marionette.Application();

    // An init function for your main application object
    App.addInitializer(function () {
        this.root = '/';
        this.router = new Router();
        this.addRegions({
            'content': '#content'
        });
    });

    // Add as many of these as you like
    App.addInitializer(function () {
        console.log("app started");
        Backbone.history.start({ root: App.root });
    });

    // Return the instantiated app (there should only be one)
    return App;

});

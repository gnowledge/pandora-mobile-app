define([
    'backbone',
    'marionette',
    "settings"
],

function(Backbone, Marionette, settings) {
    var HeaderView = Marionette.ItemView.extend({
    	el: '#siteHeader',
    	events: {
    		"submit #searchForm": "submitSearch",
            "click #exitButton": "exitApp"
    	},
    	ui: {
    		'searchInput': '#searchInput'
    	},
    	initialize: function() {
    		this.bindUIElements();
    	},

        //Submit button to search videeos  in Text box.
    	submitSearch: function(e) {
    		e.preventDefault();
    		var queryString = this.ui.searchInput.val();
    		var searchURL = "search/" + queryString;
    		Backbone.history.navigate(searchURL, {trigger: true});
    	},
        exitApp: function() {
            var platform = window.globalConfig.platform;
            if (platform == 'web') {
                console.log("does not work in webapp");
            } else {
                navigator.app.exitApp();
            }
        }
    });

    return HeaderView;
});
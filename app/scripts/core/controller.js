/**
 * # controller.js
 *
 * Implements basic Marionette controller pattern.
 *
 * Each of the route controllers identified in routes.js is defined here.
 */

define([
    "jquery",
    "require",
    "backbone",
    "views/home",
    "helpers/api"
],

function($, require, Backbone, HomeView, api) {
    return {
        'home': function() {
            console.log("home view", HomeView);
            console.log("api", api);
            var app = require('app');
            var listQuery = {
                "keys": ["user","name","items","type","status","id","modified","query"],
                "query": {
                    "conditions": [
                            {"key":"status","value":"featured","operator":"="}
                        ],
                        "operator":"&"
                    },
                    "range":[0,19],
                    "sort":[{"key":"position","operator":"+"}]}
            var $xhr = api.q("findLists", listQuery);
            //var $xhr = api.q("findLists", {'keys': ['featured']});
            $xhr.done(function(data) {
                console.log("home route", data);
                var view = new HomeView();
                app.content.show(view);
            });    
        },
        'video': function(id, view){
            console.log(id,view);
            var $xhr = api.getVideo(id);
            $xhr.done(function(response) {
                require([
                    'models/video',
                    'views/videoInfo',
                    'app'
                ], function(Video, VideoInfoView, app) {
                    var video = new Video(response.data);
                    console.log("our model", video);
                    var view = new VideoInfoView({
                        model: video
                    });
                    console.log("view", view);
                    app.content.show(view);     
                });
            })
        }
    
    }
});

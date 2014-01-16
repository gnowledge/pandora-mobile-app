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
        'foo': function(id) {
            alert(id);
            console.log("i am the foo route");
        }  
    }
});

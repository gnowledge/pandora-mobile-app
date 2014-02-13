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

        'playVideo': function(id){
            var $xhr = api.getPlayVideo(id);
            $xhr.done(function(response) {
                require([
                    'models/video',
                    'views/playVideo',
                    'app'
                ], function(Video, PlayVideoView, app) {
                    var video = new Video(response.data);                                         
                    console.log("our model", video);
                    var view = new PlayVideoView({
                        model: video
                    });
                    app.content.show(view);     
                });
            })
        },

        'videoInfo': function(id){
            var $xhr = api.getVideoInfo(id);
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
                    app.content.show(view);     
                });
            })
        },

        'videoLayers': function(id) {
            console.log("video layers function", id)
            var $xhr = api.getVideoLayers(id);
            $xhr.done(function(response) {
                console.log(response);
                require([
                    'collections/transcripts',
                    'views/videoTranscripts',
                    'app'
                ], function(Transcripts, VideoTranscriptsView, app) {
                    var data = response.data.layers.transcripts;
                    var transcripts = new Transcripts(data);
                    console.log(transcripts);
                    var view = new VideoTranscriptsView({
                        collection: transcripts
                    });
                    app.content.show(view);
                });
            });
        },

        
'signin': function() {
  require([
    'views/signin',
    'app'
  ], function(SigninView, app) {
    var signinView = new SigninView();
    app.content.show(signinView);
  });
}

        






    
    }
});


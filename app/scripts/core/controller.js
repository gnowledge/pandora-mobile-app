define([
    "jquery",
    "require",
    "backbone",
    "views/home",
    "helpers/api",
    "views/loading",
    "settings"
],
//Function of Home Page.
function($, require, Backbone, HomeView, api, LoadingView, settings) {
    var loadingView = new LoadingView();
    return {
        'home': function() {
            var app = require('app');
            app.content.show(loadingView);

            var $xhr = api.getFeaturedLists();
            $xhr.done(function(response) {
                var listItems = response.data.items;
                require([
                    'collections/videoLists',
                    'views/videoLists',
                    'app'
                ], function(VideoLists, VideoListsView, app) {
                    console.log("home route", listItems);
                    var videoLists = app.videoLists = new VideoLists(listItems);
                    var view = new VideoListsView({
                        collection: videoLists
                    });
                    app.content.show(view);
                });
            });    
        },
//Function to play  video.
        'playVideo': function(id, timing){
            var $xhr = api.getPlayVideo(id);
            var app = require('app');
            app.content.show(loadingView);
            $xhr.done(function(response) {
                require([
                    'models/video',
                    'views/playVideo',
                ], function(Video, PlayVideoView) {
                    var video = new Video(response.data);                                         
                    console.log("our model", video);
                    var view = new PlayVideoView({
                        model: video,
                        timing: timing
                    });
                    app.content.show(view);     
                });
            })
        },
//Function of list videos with pagination.
        'list': function(id, page) {
            if (!page) {
                page = 0;
            }
            var startRange = page * settings.pageSize;
            var endRange = startRange + settings.pageSize;
            var range = [startRange, endRange];
            //first xhr request only fetches number of results, etc.
          
            var app = require('app');
            app.content.show(loadingView);
              var $xhr = api.getVideosInList(id, range);
            $xhr.done(function(response) {
                var videosCount = response.data.items;
                var $xhr2 = api.getVideosInList(id, range, ['id', 'title']);
                $xhr2.done(function(response) {
                    var videosData = response.data.items;    
                    require([
                        'collections/videos',
                        'views/videoList'
                    ],function(Videos, VideoListView) {
                        console.log("videos in this list", videosData);
                        var videosCollection = new Videos(videosData);
                        var view = new VideoListView({
                            collection: videosCollection,
                            count: videosCount,
                            page: page,
                            id:id
                        });
                        app.content.show(view);
                    });
                });
            });    
        },
//Function of search video page with pagination.
        'search': function(queryString, page) {
            if (!page) {
                page = 0;
            }
            var startRange = page * settings.pageSize;
            var endRange = startRange + settings.pageSize;
            var range = [startRange, endRange];
            var app = require('app');
            app.content.show(loadingView);
            var $xhr = api.getVideosSearch(queryString, range);
            $xhr.done(function(response) {
                var videosCount = response.data.items;
                var $xhr2 = api.getVideosSearch(queryString, range, ['id', 'title']);
                $xhr2.done(function(response) {
                    var videosData = response.data.items;
                    require([
                        'collections/videos',
                        'views/videoSearchResults',

                    ],function(Videos, VideoSearchResults) {
                        console.log("videos matching query", videosData);
                        var videosCollection = new Videos(videosData);
                        var view = new VideoSearchResults({
                            collection: videosCollection,
                            count: videosCount,
                            page: page,
                            queryString: queryString
                        });
                        app.content.show(view);
                    });
                });
            });    
        },
//Function of video Information (in detail).
        'videoInfo': function(id){
            var app = require('app');
            app.content.show(loadingView);
            var $xhr = api.getVideoInfo(id);
            $xhr.done(function(response) {
                require([
                    'models/video',
                    'views/videoInfo'
                ], function(Video, VideoInfoView) {
                    var video = new Video(response.data);                                         
                    console.log("our model", video);
                    var view = new VideoInfoView({
                        model: video
                    });
                    app.content.show(view);     
                });
            })
        },

//Function of list video Transcripts.
        'videoLayers': function(id) {
            var app = require('app');
            app.content.show(loadingView);
            console.log("video layers function", id)
            var $xhr = api.getVideoLayers(id);
            $xhr.done(function(response) {
                console.log(response);
                require([
                    'collections/transcripts',
                    'views/videoTranscripts',
                ], function(Transcripts, VideoTranscriptsView) {
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

//Function of sign-in page with email-id & password.
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


define([
    'jquery',
    'settings'
],

//Home  Page api.
function($, settings) {
    var ApiHelper = function() {
        var instanceBase = settings.pandoraInstance;
        var apiBase = instanceBase + "api/";
        this.cache = {};
        this.q = function(action, data) {
            var cacheKey = JSON.stringify({
                'action': action,
                'data': data
            });
            if (this.cache.hasOwnProperty(cacheKey)) {
                return this.cache[cacheKey];
            }
            var $xhr = $.ajax({
                'url': apiBase,
                'data': {
                    'action': action,
                    'data': JSON.stringify(data)
                },
                'type': 'POST',
                'dataType': 'json'
            });
            this.cache[cacheKey] = $xhr;

            return $xhr;
        };

//List of videos with keys,query,conditions,operator,range,sort.
        this.getFeaturedLists = function() {
            var listQuery = {
                "keys": ["user","name","items","type","status","id","modified","query"],
                "query": {
                    "conditions": [
                            {"key":"status","value":"featured","operator":"="}
                        ],
                        "operator":"&"
                    },
                    "range":[0,19],
                    "sort":[{"key":"position","operator":"+"}]
                }

            return this.q("findLists", listQuery);

        }
//Initialize api.

        this.init = function() {
            var data = {};
            var action = "init";
            return this.q(action, data);
        };

//Video list api with query,conditions,operator,range,sort.
        this.getVideosInList = function(id, range, keys) {
            if (!range) {
                range = [0, 50];
            }
            var data = {
                query: {
                    conditions: [{
                        key: 'list',
                        operator: '=',
                        value: id
                    }],
                    operator: '&'
                },
                range: range,
                sort: [{key: 'title', operator: '+'}]
            };
            if (keys) {
                data.keys = keys;
            }
            var action = "find";
            return this.q(action, data);
        };

//Video Search api with query,conditions,operator,range,sort.
        this.getVideosSearch = function(queryString, range, keys) {
            if (!range) {
                range = [0, 50];
            }
            var data = {
                query: {
                    conditions: [{
                        key: '*',
                        operator: '=',
                        value: queryString
                    }],
                    operator: '&'
                },
                range: range,
                sort: [{key: 'title', operator: '+'}]
            };
            if (keys) {
                data.keys = keys;
            }
            var action = "find";
            return this.q(action, data);          
        };

//Video Player api with id.
        this.getPlayVideo = function(id) {
            var data= {
                'id':id
            };
            var action='get';
            var $xhr = this.q(action, data);
            return $xhr;
        };

//Video Information api with id.
        this.getVideoInfo = function(id) {
            var data= {
                'id':id
            };
            var action='get';
            var $xhr = this.q(action, data);
            return $xhr;
        };

  //Video Transcript api with id & keys.      
        this.getVideoLayers = function(id) {
            var data= {
                'id': id,
                'keys': ['layers']
            };
            var action='get';
            var $xhr = this.q(action, data);
            return $xhr;
        };

//Sign-in api with username & password.
        this.signin = function(username, password) {
            var data = {
                username: username,
                password: password
            };
            var action = "signin";
            var $xhr = this.q(action, data);
            return $xhr;         
        };
    };
    console.log("api helper", ApiHelper);
    //return {'hello': 'hi'};
    return new ApiHelper(); 

});
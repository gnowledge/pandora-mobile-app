define([
    'jquery',
    'settings'
],

function($, settings) {
    var ApiHelper = function() {
        var instanceBase = settings.pandoraInstance;
        var apiBase = instanceBase + "api/";

        this.q = function(action, data) {
            var $xhr = $.ajax({
                'url': apiBase,
                'data': {
                    'action': action,
                    'data': JSON.stringify(data)
                },
                'type': 'POST',
                'dataType': 'json'
            });
            // var $xhr = $.post(apiBase, {
            //     'action': action,
            //     'data': JSON.stringify(data)
            // })
            return $xhr;
        };

        this.getVideo=function(id) {
            var data= {
                'id':id
            };
            var action='get';
            var $xhr = this.q(action, data);
            return $xhr;
        }

    };
    console.log("api helper", ApiHelper);
    //return {'hello': 'hi'};
    return new ApiHelper(); 

});
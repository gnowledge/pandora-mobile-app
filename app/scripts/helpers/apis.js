define([
    'jquery',
    'settings'
],

function($, settings) {
    var ApiHelper = function() {
        var instanceBase = settings.pandoraInstance;
        var apisBase = instanceBase + "apis/";

        this.q = function(action, data) {
            var $xhr = $.ajax({
                'url': apisBase,
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

        this.getVideo=function(ids) {
            var data= {
                'ids':ids
            };
            var action='get';
            var $xhr = this.q(action, data);
            return $xhr;
        }

        
    


    };
    console.log("apis helper", ApisHelper);
    //return {'hello': 'hi'};
    return new ApisHelper(); 

});
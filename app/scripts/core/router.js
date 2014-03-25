define([
    "marionette",
    "core/controller"
],

function(Marionette, Controller) {
    var appRoutes = {
        '': 'home',
        'signin': 'signin',  //User sign in page with email-id & password.
        'video/:id/videoplay/:timing': 'playVideo',  //Video Transcript page with in & out timing.
        'video/:id/videoplay': 'playVideo',   //Video Player Page.
        'video/:id/layers': 'videoLayers',  //List of video Transcripts.
        'list/:id': 'list',  //List of videos page.
        'list/:id/:page': 'list',  //List of videos with Pagination.
        'search/:query': 'search',  //User can search videos.
        'search/:query/:page': 'search',  //Search video with Pagination.
        
        
    };

    var router = Marionette.AppRouter.extend({
        controller: Controller,
        appRoutes: appRoutes
    });
    // var router = Marionette.AppRouter.extend({
    //     controller: Controller,
    //     appRoutes: appRoutes,
    //     _extractParameters: function(route, fragment) {
    //         var params = route.exec(fragment).slice(1);
    //         return _.map(params, function(param) {
    //             return param ? param : null;
    //         });
    //     }
    // });

    return router;
})

define([
    "marionette",
    "core/controller"
],

function(Marionette, Controller) {
    var appRoutes = {
        '': 'home',
<<<<<<< HEAD
        'video/:id/:view': 'video'
       

=======
        'video/:id/:view': 'video',
        'video/:ids/:views': 'video',
>>>>>>> ef0e78f4b03fe32e07fcd0c109509e78a3285bfa
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

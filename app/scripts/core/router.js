define([
    "marionette",
    "core/controller"
],

function(Marionette, Controller) {
    var appRoutes = {
        '': 'home'
    }

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

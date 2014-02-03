(function () {
    "use strict";

    APP.dependency.SearchFiltering = {
        views: {
            "searchFiltering": function(ctx) {
                return new APP.view.SearchFiltering(ctx.messageBus);
            }
        },
        controls: {
            "visualFiltering": function(ctx) {
                return new APP.controller.VisualFiltering(ctx.messageBus);
            },
            "listFiltering": function(ctx) {
                return new APP.controller.ListFiltering(ctx.messageBus);
            }
        }
    };

}());
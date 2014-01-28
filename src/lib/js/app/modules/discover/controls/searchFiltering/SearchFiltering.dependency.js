(function () {
    "use strict";

    APP.dependency.SearchFiltering = {
        views: {
            "searchFiltering": function(ctx) {
                return new APP.view.SearchFiltering(ctx.parentMessageBus);
            }
        },
        controls: {
            "visualFiltering": function(ctx) {
                return new APP.controller.VisualFiltering(ctx.parentMessageBus);
            },
            "listFiltering": function(ctx) {
                return new APP.controller.ListFiltering(ctx.parentMessageBus);
            }
        }
    };

}());
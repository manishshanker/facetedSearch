(function () {
    "use strict";

    ICEX.dependency.SearchFiltering = {
        views: {
            "searchFiltering": function(ctx) {
                return new ICEX.view.SearchFiltering(ctx.messageBus);
            }
        },
        controls: {
            "visualFiltering": function(ctx) {
                return new ICEX.controller.VisualFiltering(ctx.messageBus);
            },
            "listFiltering": function(ctx) {
                return new ICEX.controller.ListFiltering(ctx.messageBus);
            }
        },
        services: {
            "searchFiltering": function() {
                return new ICEX.service.SearchFiltering();
            }
        }
    };

}());
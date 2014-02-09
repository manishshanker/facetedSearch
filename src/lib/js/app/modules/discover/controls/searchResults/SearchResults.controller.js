(function (HAF) {
    "use strict";

    ICEX.controller.SearchResults = HAF.Controller.extend({
        autoShowHide: true,
        inject: {
            views: ["searchResults"],
            templates: {
                searchResults: "tmpl!SearchResults"
            },
            services: ["searchResults"]
        },
        update: function () {
            var that = this;
            that.services.searchResults.fetch(function (data) {
                onUpdate(that, data);
            });
        }
    });

    function onUpdate(ctx, data) {
        ctx.templates.searchResults.load(function() {
            ctx.views.searchResults.render(ctx.templates.searchResults.process(data));
        });
    }

}(HAF));
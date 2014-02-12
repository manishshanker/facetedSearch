(function (Mettle) {
    "use strict";

    ICEX.controller.SearchResults = Mettle.Controller.extend({
        autoShowHide: true,
        inject: {
            views: ["searchResults"],
            templates: {
                searchResults: "tmpl!SearchResults"
            },
            services: ["searchResults"]
        },
        update: function (id) {
            var that = this;
            that.services.searchResults.fetch(id, function (data) {
                onUpdate(that, data);
            });
        }
    });

    function onUpdate(ctx, data) {
        ctx.templates.searchResults.load(function() {
            ctx.views.searchResults.render(ctx.templates.searchResults.process(data));
        });
    }

}(Mettle));
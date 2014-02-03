(function (HAF) {
    "use strict";

    APP.controller.SearchResults = HAF.Controller.extend({
        autoShowHide: true,
        inject: {
            views: ["searchResults"],
            templates: ["searchResults"],
            services: ["searchResults"]
        },
        update: function (data) {
            var that = this;
            that.templates.searchResults.load(function() {
                that.views.searchResults.render(that.templates.searchResults.process(data));
            });
        },
        fetch: function () {
            var ctx = this;
            ctx.services.searchResults.fetch(function (data) {
                ctx.update(data);
            });
        }
    });

}(HAF));
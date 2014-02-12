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
                onUpdate(that.templates.searchResults, that.views.searchResults, data);
            });
        }
    });

    function onUpdate(template, view, data) {
        template.load(function() {
            view.render(template.process(data));
        });
    }

}(Mettle));
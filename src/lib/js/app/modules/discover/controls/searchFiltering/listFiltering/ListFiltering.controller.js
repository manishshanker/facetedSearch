(function (HAF) {
    "use strict";

    ICEX.controller.ListFiltering = HAF.Controller.extend({
        inject: {
            templates: ["listFiltering"],
            views: ["listFiltering"],
            services: ["listFiltering"]
        },
        update: function(data) {
            var that = this;
            that.templates.listFiltering.load(function() {
                that.views.listFiltering.render(that.templates.listFiltering.process(that.services.listFiltering.transformData(data)));
            });
        }
    });

}(HAF));
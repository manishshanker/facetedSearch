(function (Mettle) {
    "use strict";

    ICEX.controller.ListFiltering = Mettle.Controller.extend({
        inject: {
            templates: {
                listFiltering: "tmpl!ListFiltering"
            },
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

}(Mettle));
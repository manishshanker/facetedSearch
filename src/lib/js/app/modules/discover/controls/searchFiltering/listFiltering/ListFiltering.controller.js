(function (HAF) {
    "use strict";

    APP.controller.ListFiltering = HAF.Controller.extend({
        autoWire: true,
        inject: {
            templates: ["listFiltering"],
            views: ["listFiltering"]
        }
    });

}(HAF));
(function (HAF) {
    "use strict";

    APP.controller.SearchResults = HAF.Controller.extend({
        autoWire: true,
        autoShowHide: true,
        inject: {
            views: ["searchResults"],
            templates: ["searchResults"]
        }
    });

}(HAF));
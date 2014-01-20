(function (HAF) {
    "use strict";

    APP.controller.SearchResults = HAF.Controller.extend({
        autoWire: true,
        autoShowHide: true,
        inject: function () {
            return {
                views: {
                    searchResults: new APP.view.SearchResults()
                },
                templates: {
                    searchResults: new HAF.Template("searchResultTemplate")
                }
            };
        }
    });

}(HAF));
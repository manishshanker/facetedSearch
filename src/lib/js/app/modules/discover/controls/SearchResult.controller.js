(function (HAF) {
    "use strict";

    APP.controller.SearchResult = HAF.Controller.extend({
        autoShowHide: true,
        init: function () {
            this.inject({
                views: {
                    searchResult: new APP.view.SearchResult(),
                    visualResult: new APP.view.VisualResult()
                }
            });
        },
        render: function (data) {
            this.views.visualResult.render(data);
        }
    });

}(HAF));
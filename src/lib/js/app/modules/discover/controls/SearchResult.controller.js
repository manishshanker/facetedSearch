(function (HAF) {
    "use strict";

    APP.controller.SearchResult = HAF.Controller.extend({
        init: function () {
            this.inject({
                views: {
                    searchResult: new APP.view.SearchResult(),
//                listResult: new APP.view.ListResult(),
                    visualResult: new APP.view.VisualResult()
                }
            });
        },
        hide: function () {
            this.views.searchResult.hide();
        },
        show: function () {
            this.views.searchResult.show();
            this.views.searchResult.load();
        },
        render: function (data) {
            this.views.visualResult.render(data);
        }
    });

}(HAF));
(function (HAF) {
    "use strict";

    APP.controller.SearchResult = HAF.Controller.extend({
        init: function() {
            this.inject({
                views: {
                    searchResult: new APP.view.SearchResult()
//                ,
//                visualResult: new APP.view.VisualResult(),
//                listResult: new APP.view.ListResult()
                }
            });
        },
        hide: function() {
            this.views.searchResult.hide();
        },
        show: function() {
            this.views.searchResult.show();
            this.views.searchResult.load();
        }
    });

}(HAF));
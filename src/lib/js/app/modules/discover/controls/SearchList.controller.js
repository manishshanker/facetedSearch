(function (HAF) {
    "use strict";

    APP.controller.SearchList = HAF.Controller.extend({
        init: function () {
            this.inject({
                views: {
                    searchList: new APP.view.SearchList()
                },
                templates: {
                    searchList: new HAF.Template("searchListTemplate")
                }
            })
        },
        renderNewList: function (data) {
            this.views.searchList.renderNewList(this.templates.searchList, data);
        },
        goBackToFirstLevel: function () {
            this.views.searchList.goBackToFirstLevel();
        }
    });

}(HAF));
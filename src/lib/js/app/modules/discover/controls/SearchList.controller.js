(function (HAF) {
    "use strict";

    APP.controller.SearchList = HAF.Controller.extend({
        getTemplates: function () {
            return {
                searchList: new HAF.Template("searchListTemplate")
            };
        },
        getViews: function () {
            return {
                searchList: new APP.view.SearchList()
            };
        }
    });

}(HAF));
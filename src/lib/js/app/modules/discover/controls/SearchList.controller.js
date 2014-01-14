(function (HAF) {
    "use strict";

    APP.controller.SearchList = HAF.Controller.extend({
        autoWire: true,
        autoShowHide: true,
        currentFilterId: null,
        init: function (messageBus) {
            this.inject({
                views: {
                    searchList: new APP.view.SearchList(messageBus)
                },
                templates: {
                    searchList: new HAF.Template("searchListTemplate")
                }
            })
        },
        filter: function (id, data) {
            var that = this;
            if (that.currentFilterId) {
                var currentLevel = that.currentFilterId.split("_").length;
                var newLevel = id.split("_").length;
                if (currentLevel < newLevel) {
                    that.views.searchList.renderNewList(that.templates.searchList, data);
                } else {
                    that.views.searchList.removeList(id, newLevel);
                }
            } else {
                that.views.searchList.renderNewList(that.templates.searchList, data);
            }
            that.currentFilterId = id;
        },
        goBackToFirstLevel: function () {
            this.views.searchList.goBackToFirstLevel();
        },
        hideList: function() {
            this.views.searchList.hideList();
        }
    });

}(HAF));
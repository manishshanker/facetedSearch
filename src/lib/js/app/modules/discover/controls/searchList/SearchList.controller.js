(function (HAF) {
    "use strict";

    APP.controller.SearchList = HAF.Controller.extend({
        autoShowHide: true,
        currentFilterId: null,
        currentFilterInfo: null,
        inject: function () {
            return {
                views: {
                    searchList: new APP.view.SearchList(this.messageBus)
                },
                templates: {
                    searchList: new HAF.Template("searchListTemplate")
                }
            };
        },
        update: function (id, data) {
            var that = this, currentLevel, newLevel;
            if (!id) {
                that.currentFilterId = null;
            }
            if (that.currentFilterId) {
                currentLevel = that.currentFilterId.split("_").length;
                newLevel = id.split("_").length + 1;
                if (currentLevel < newLevel) {
                    that.views.searchList.render(that.templates.searchList.process(data));
                } else {
                    that.views.searchList.removeList(id, newLevel);
                }
            } else {
                that.views.searchList.render(that.templates.searchList.process(data));
            }
            that.currentFilterId = data.id;
            that.currentFilterInfo = {
                title: data.title,
                id: data.id
            };
        }
    });

}(HAF));
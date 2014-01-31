(function (HAF) {
    "use strict";

    APP.controller.SearchList = HAF.Controller.extend({
        autoShowHide: true,
        currentLevel: -1,
        inject: {
            views: ["searchList"],
            templates: ["searchList"]
        },
        update: function (id, data) {
            var that = this;
            var newLevel = id ? id.split("_").length : 1;
            var direction = newLevel > this.currentLevel ? -1 : 1;
            that.templates.searchList.load(function() {
                that.views.searchList.removeList(direction, function() {
                    that.views.searchList.render(direction, that.templates.searchList.process(data));
                });
                that.currentLevel = id ? id.split("_").length : 0;
            });
        }
    });

}(HAF));
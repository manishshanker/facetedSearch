(function (HAF) {
    "use strict";

    APP.controller.SearchList = HAF.Controller.extend({
        autoShowHide: true,
        currentLevel: -1,
        inject: {
            views: ["searchList"],
            templates: ["searchList"],
            services: ["searchList"]
        },
        load: function (ids) {
            var ctx = this;
            ctx.services.searchList.fetch(ctx, ids, function (data) {
                ctx.update(ids, data);
            });
        },
        update: function (id, data) {
            var that = this;
            var newLevel = id ? id.split("_").length : 1;
            var direction = newLevel > this.currentLevel ? -1 : 1;
            that.templates.searchList.load(function () {
                that.views.searchList.removeList(direction, function () {
                    that.views.searchList.render(direction, that.templates.searchList.process(data));
                });
                that.currentLevel = id ? id.split("_").length : 0;
            });
        },
        getCurrentFilterInfo: function () {
            return this.services.searchList.currentFilterInfo;
        },
        getMetaInfo: function (ids, callback) {
            var ctx = this;
            ctx.services.searchList.getMetaInfo(ctx, ids, callback);
        }
    });

}(HAF));
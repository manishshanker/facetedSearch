(function (HAF) {
    "use strict";

    ICEX.controller.SearchList = HAF.Controller.extend({
        autoShowHide: true,
        currentLevel: -1,
        inject: {
            views: ["searchList"],
            templates: {
                searchList: "tmpl!searchList"
            },
            services: ["searchList"]
        },
        update: function (id) {
            var that = this;
            that.services.searchList.fetch(that, id, function (data) {
                onUpdate(that, id, data);
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

    function onUpdate(ctx, id, data) {
        var newLevel = id ? id.split("_").length : 1;
        var direction = newLevel > ctx.currentLevel ? -1 : 1;
        ctx.templates.searchList.load(function () {
            ctx.views.searchList.removeList(direction, function () {
                ctx.views.searchList.render(direction, ctx.templates.searchList.process(data));
            });
            ctx.currentLevel = id ? id.split("_").length : 0;
        });
        ctx.views.searchList.hideHideListLink(!id);
    }

}(HAF));
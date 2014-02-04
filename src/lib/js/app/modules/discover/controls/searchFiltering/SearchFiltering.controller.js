(function (HAF) {
    "use strict";

    APP.controller.SearchFiltering = HAF.Controller.extend({
        currentControl: null,
        autoLoadControls: true,
        autoLayout: true,
        autoShowHide: true,
        injector: "SearchFiltering",
        inject: {
            views: ["searchFiltering"],
            controls: ["visualFiltering", "listFiltering"],
            services: ["searchFiltering"]
        },
        load: function () {
            var that = this;
            that._super();
            that.views.searchFiltering.render();
            that.messageBus.subscribe(that, {
                "search-filtering-changed": function (id) {
                    onSearchFilteringChanged(id, that);
                },
                "search-filter-tab-changes": function (tabName) {
                    that.currentControl = tabName === "appListFiltering" ? that.controls.listFiltering : that.controls.visualFiltering;

                    //if the control was rendered already, update it when the tab is switched
                    if (that.lastDataSet) {
                        that.currentControl.update(that.lastDataSet);
                    }
                }
            });
            that.currentControl = that.controls.visualFiltering;
        },
        update: function () {
            var that = this;
            that.services.searchFiltering.fetch(that, function (data) {
                onUpdate(that, data);
            });
        }
    });

    function onUpdate(ctx, data) {
        ctx.lastDataSet = data;
        ctx.currentControl.update(ctx.lastDataSet);
    }

    function onSearchFilteringChanged(id, ctx) {
        ctx.services.searchFiltering.getChild(id, function (data) {
            ctx.update(data);
        });
    }

}(HAF));
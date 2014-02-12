(function (Mettle) {
    "use strict";

    ICEX.controller.SearchFiltering = Mettle.Controller.extend({
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
        dataIsDirty: true,
        currentId: null,
        load: function () {
            var that = this;
            that._super();
            that.views.searchFiltering.render();
            that.messageBus.subscribe(that, {
                "searchFiltering-changed": function (id) {
                    this.currentId = id;
                    onSearchFilteringChanged(id, that);
                },
                "searchFilter-tabChange": function (tabName) {
                    onViewChange(that, tabName);
                }
            });
            that.currentControl = that.controls.visualFiltering;
        },
        update: function (id, newData) {
            var that = this;
            if (newData) {
                updateCurrentControl(that, newData);
            } else {
                getTopLevelData(that, id);
            }
        },
        getCurrentId: function() {
            return this.currentId;
        }
    });

    function updateCurrentControl(ctx, data, reRender) {
        ctx.lastDataSet = data;
        ctx.currentControl.update(data, reRender);
    }

    function onViewChange(ctx, tabName) {
        ctx.currentControl = tabName === "appListFiltering" ? ctx.controls.listFiltering : ctx.controls.visualFiltering;

        //if the control was rendered already, update it when the tab is switched
        if (ctx.lastDataSet && ctx.dataIsDirty) {
            ctx.dataIsDirty = false;
            ctx.currentControl.update(null, ctx.lastDataSet);
        }
    }

    function getTopLevelData(ctx, id) {
        ctx.services.searchFiltering.fetch(ctx, id, function (data) {
            ctx.dataIsDirty = true;
            updateCurrentControl(ctx, data, !!id);
            this.currentId = id;
        });
    }

    function onSearchFilteringChanged(id, ctx) {
        ctx.services.searchFiltering.getChild(id, function (data) {
            ctx.dataIsDirty = true;
            ctx.update(null, data);
        });
    }

}(Mettle));
(function (HAF) {
    "use strict";

    APP.controller.SearchFiltering = HAF.Controller.extend({
        currentControl: null,
        autoLayout: true,
        autoShowHide: true,
        injector: "SearchFiltering",
        inject: {
            views: ["searchFiltering"],
            controls: ["visualFiltering", "listFiltering"]
        },
        load: function () {
            var that = this;
            that.views.searchFiltering.render();
            that.parentMessageBus.subscribe(that, "search-filter-tab-changes", function(tabName) {
                that.currentControl = tabName === "appListFiltering" ? that.controls.listFiltering : that.controls.visualFiltering;

                //if the control was rendered already, update it when the tab is switched
                if (that.lastDataSet) {
                    that.currentControl.update(that.lastDataSet);
                }
            });
            that.currentControl = that.controls.visualFiltering;
        },
        update: function (data) {
            this.lastDataSet = data;
            this.currentControl.update(this.lastDataSet);
        }
    });

}(HAF));
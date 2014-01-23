(function (HAF) {
    "use strict";

    APP.controller.SearchFiltering = HAF.Controller.extend({
        autoShowHide: true,
        autoLayout: true,
        currentControl: null,
        inject: function () {
            return {
                views: {
                    searchFiltering: new APP.view.SearchFiltering(this.messageBus)
                },
                controls: {
                    visualFiltering: new APP.controller.VisualFiltering(this.messageBus),
                    listFiltering: new APP.controller.ListFiltering(this.messageBus)
                }
            };
        },
        load: function () {
            var that = this;
            that.messageBus.subscribe(that, "search-filter-tab-changes", function(tabName) {
                if (tabName === "appListFiltering" && !that.listFilteringLoaded) {
                    that.controls.listFiltering.update(that.lastDataSet);
                    that.listFilteringLoaded = true;
                    that.currentControl = that.controls.listFiltering;
                } else {
                    that.currentControl = that.controls.visualFiltering;
                }
                //if the control was rendered already, update it when the tab is switched
                if (this.lastDataSet) {
                    that.currentControl.update(this.lastDataSet);
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
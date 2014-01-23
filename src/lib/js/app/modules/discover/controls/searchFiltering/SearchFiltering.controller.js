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
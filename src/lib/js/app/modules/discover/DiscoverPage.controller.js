(function (HAF) {
    "use strict";

    APP.controller.DiscoverPage = HAF.Controller.extend({
        getControls: function () {
            return {
                searchList: new APP.controller.SearchList(),
                breadcrumb: new APP.controller.Breadcrumb()
            };
        },
        getServices: function () {
            return {
                searchList: new APP.service.SearchList()
            };
        },
        onStateChange: function () {
            return {
                searchList: function (searchList, stateData) {
                    var that = this;
                    if (stateData.module) {
                        that.services.searchList.fetch(that, stateData.moduleItem, that.onFilterData);
                        that.controls.breadcrumb.render(that.services.searchList.getMetaInfo(stateData.moduleItem));
                    } else {
                        that.controls.breadcrumb.hide();
                        that.controls.searchList.goBackToFirstLevel();
                    }
                }
            }
        },
        onFilterData: function(data) {
            this.controls.searchList.renderNewList(data);
        },
        controlMessages: {
            show: "navigationChangedTo:discover",
            hide: "navigationChangedFrom:discover",
            stateChange: "navigationStateChange:discover"
        }
    });

}(HAF));
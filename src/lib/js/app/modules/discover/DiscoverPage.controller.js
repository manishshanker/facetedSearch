(function (HAF) {
    "use strict";

    APP.controller.DiscoverPage = HAF.Controller.extend({
        init: function() {
            this.inject({
               controls: {
                   searchList: new APP.controller.SearchList(),
                   breadcrumb: new APP.controller.Breadcrumb(),
                   searchResult: new APP.controller.SearchResult(),
                   questions: new APP.controller.Questions()
               },
                services: {
                    searchList: new APP.service.SearchList()
                }
            });
        },
        onStateChange: function () {
            return {
                searchList: function (searchList, stateData) {
                    var that = this;
                    if (stateData.module) {
                        that.services.searchList.fetch(that, stateData.moduleItem, that.onFilterData);
                        that.controls.breadcrumb.render(that.services.searchList.getMetaInfo(stateData.moduleItem));
                        that.controls.questions.hide();
                        that.controls.searchResult.show();
                    } else {
                        that.controls.searchResult.hide();
                        that.controls.questions.show();
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
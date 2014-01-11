(function (HAF) {
    "use strict";

    APP.controller.DiscoverPage = HAF.Controller.extend({
        autoWire: true,
        autoShowHide: true,
        init: function() {
            this.inject({
               controls: {
                   searchList: new APP.controller.SearchList(),
                   breadcrumb: new APP.controller.Breadcrumb(),
                   searchResult: new APP.controller.SearchResult(),
                   questions: new APP.controller.Questions()
               },
                services: {
                    searchList: new APP.service.SearchList(),
                    searchResult: new APP.service.SearchResult()
                }
            });
        },
        onStateChange: function () {
            return {
                searchList: function (searchList, stateData) {
                    var that = this;
                    if (stateData.module) {
                        that.services.searchList.fetch(that, stateData.moduleItem, that.onFilterData);
                    } else {
                        searchList.goBackToFirstLevel();
                    }
                },
                searchResult: function(searchResult, stateData) {
                    var that = this;
                    if (stateData.module) {
                        searchResult.show();
                        that.services.searchResult.fetch(searchResult, searchResult.render);
                    } else {
                        searchResult.hide();
                    }
                },
                breadcrumb: function(breadcrumb, stateData) {
                    var that = this;
                    if (stateData.module) {
                        breadcrumb.render(that.services.searchList.getMetaInfo(stateData.moduleItem));
                    } else {
                        breadcrumb.hide();
                    }
                },
                questions: function(questions, stateData) {
                    if (stateData.module) {
                        questions.hide();
                    } else {
                        questions.show();
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
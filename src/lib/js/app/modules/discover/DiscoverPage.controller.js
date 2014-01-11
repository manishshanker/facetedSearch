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
                searchList: function () {
                    HAF.navigation.route(this, "/discover/searchItem/:id", loadSearchItem);
                    HAF.navigation.route(this, "/discover", loadFirstLevel);
                },
                searchResult: function() {
                    HAF.navigation.route(this, "/discover/searchItem/:id", showSearchResult);
                    HAF.navigation.route(this, "/discover", hideSearchResult);
                },
                breadcrumb: function() {
                    HAF.navigation.route(this, "/discover/searchItem/:id", showBreadcrumb);
                    HAF.navigation.route(this, "/discover", hideBreadcrumb);
                },
                questions: function() {
                    HAF.navigation.route(this, "/discover/searchItem/:id", hideQuestions);
                    HAF.navigation.route(this, "/discover", showQuestions);
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

    function hideQuestions() {
        this.controls.questions.hide();
    }

    function showQuestions() {
        this.controls.questions.show();
    }

    function hideBreadcrumb() {
        this.controls.breadcrumb.hide();
    }

    function showBreadcrumb(id) {
        this.controls.breadcrumb.render(this.services.searchList.getMetaInfo(id));
    }

    function showSearchResult() {
        var searchResult = this.controls.searchResult;
        searchResult.show();
        this.services.searchResult.fetch(searchResult, searchResult.render);
    }

    function hideSearchResult() {
        this.controls.searchResult.hide();
    }

    function loadSearchItem(id) {
        this.services.searchList.fetch(this, id, this.onFilterData);
    }

    function loadFirstLevel() {
        this.controls.searchList.goBackToFirstLevel();
    }
}(HAF));
(function (HAF) {
    "use strict";

    APP.controller.DiscoverPage = HAF.Controller.extend({
        autoWire: true,
        messageBus: null,
        init: function () {
            this.messageBus = new HAF.Messaging();
            this.inject({
                views: {
                    discoverPage: new APP.view.DiscoverPage()
                },
                controls: {
                    searchList: new APP.controller.SearchList(this.messageBus),
                    breadcrumb: new APP.controller.Breadcrumb(),
                    searchFiltering: new APP.controller.SearchFiltering(),
                    questions: new APP.controller.Questions()
                },
                services: {
                    searchList: new APP.service.SearchList(),
                    searchFiltering: new APP.service.SearchFiltering()
                }
            });
            this.messageBus.subscribe(this, "search-list-hide", hideList)
        },
        onStateChange: function () {
            return {
                searchList: function () {
                    HAF.navigation.route(this, "/discover/:id", loadSearchItem);
                    HAF.navigation.route(this, "/discover", loadFirstLevel);
                },
                searchFiltering: function () {
                    HAF.navigation.route(this, "/discover/:id", showSearchFiltering);
                    HAF.navigation.route(this, "/discover", hideSearchFiltering);
                },
                breadcrumb: function () {
                    HAF.navigation.route(this, "/discover/:id", showBreadcrumb);
                    HAF.navigation.route(this, "/discover", hideBreadcrumb);
                },
                questions: function () {
                    HAF.navigation.route(this, "/discover/:id", hideQuestions);
                    HAF.navigation.route(this, "/discover", showQuestions);
                }
            }
        },
        controlMessages: {
            show: "navigationChangedTo:discover",
            hide: "navigationChangedFrom:discover",
            stateChange: "navigationStateChange:discover"
        }
    });

    function hideList() {
        this.controls.searchList.hideList();
        this.views.discoverPage.withResults();
//        this.controls.breadcrumb.showTopic(this.controls.searchList.currentFilterInfo);
//        this.controls.searchResult.show();
    }

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
        this.controls.breadcrumb.render(this.services.searchList.getMetaInfo(id), id);
    }

    function showSearchFiltering() {
        var searchFiltering = this.controls.searchFiltering;
        searchFiltering.show();
        this.services.searchFiltering.fetch(searchFiltering, searchFiltering.render);
    }

    function hideSearchFiltering() {
        this.controls.searchFiltering.hide();
    }

    function loadSearchItem(id) {
        var that = this;
        that.services.searchList.fetch(this, id, function (data) {
            that.controls.searchList.filter(id, data);
        });
    }

    function loadFirstLevel() {
        this.controls.searchList.goBackToFirstLevel();
    }
}(HAF));
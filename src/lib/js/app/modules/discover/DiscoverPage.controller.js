(function (HAF) {
    "use strict";

    APP.controller.DiscoverPage = HAF.Controller.extend({
        autoWire: true,
        inject: function() {
            var messageBus = new HAF.Messaging();
            messageBus.subscribe(this, "search-list-hide", hideList);
            messageBus.subscribe(this, "search-list-show", showList);
            messageBus.subscribe(this, "visual-filtering-filtered", onVisualFilter);
            return {
                views: {
                    discoverPage: new APP.view.DiscoverPage()
                },
                controls: {
                    searchList: new APP.controller.SearchList(messageBus),
                    breadcrumb: new APP.controller.Breadcrumb(messageBus),
                    searchFiltering: new APP.controller.SearchFiltering(messageBus),
                    questions: new APP.controller.Questions()
                },
                services: {
                    searchList: new APP.service.SearchList(),
                    searchFiltering: new APP.service.SearchFiltering()
                },
                messageBus: messageBus
            };
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

    function onVisualFilter(id) {
        var that = this;
        that.services.searchFiltering.getChild(id, function(data) {
            that.controls.searchFiltering.updateFilter(data);
        });
    }
    function showList() {
        var that = this;
        that.controls.searchList.show();
        that.views.discoverPage.withoutResults();
        that.controls.breadcrumb.hideTopic();
        setTimeout(function() {
            that.controls.searchFiltering.layoutChange();
        }, 500);
//        this.controls.searchResult.hide();
    }

    function hideList() {
        var that = this;
        that.controls.searchList.hide();
        that.views.discoverPage.withResults();
        that.controls.breadcrumb.showTopic(that.controls.searchList.currentFilterInfo);
        setTimeout(function() {
            that.controls.searchFiltering.layoutChange();
        }, 500);
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
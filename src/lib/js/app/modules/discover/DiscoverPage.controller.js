(function (HAF) {
    "use strict";

    APP.controller.DiscoverPage = HAF.Controller.extend({
        autoLoadControls: true,
        autoShowHide: true,
        inject: function () {
            var messageBus = new HAF.Messaging();
            return {
                views: {
                    discoverPage: new APP.view.DiscoverPage()
                },
                controls: {
                    searchList: new APP.controller.SearchList(messageBus),
                    breadcrumb: new APP.controller.Breadcrumb(messageBus),
                    searchFiltering: new APP.controller.SearchFiltering(messageBus),
                    questions: new APP.controller.Questions(),
                    searchResults: new APP.controller.SearchResults()
                },
                services: {
                    searchList: new APP.service.SearchList(),
                    searchFiltering: new APP.service.SearchFiltering(),
                    searchResults: new APP.service.SearchResults()
                },
                messageBus: messageBus
            };
        },
        load: function () {
            this._super();
            this.messageBus.subscribe(this, "search-list-hide", function() {
                hideList(this);
            });
            this.messageBus.subscribe(this, "search-list-show", function() {
                showList(this);
            });
            this.messageBus.subscribe(this, "visual-filtering-filtered", function(id) {
                onVisualFilter(id, this);
            });
        },
        routes: {
            "/discover/:id": function (id) {
                loadSearchItem(this, id);
                showSearchFiltering(this);
                showBreadcrumb(this, id);
                hideQuestions(this);
            },
            "/discover": function () {
                loadSearchItem(this);
                hideSearchFiltering(this);
                hideBreadcrumb(this);
                showQuestions(this);
                showList(this);
            }
        },
        controlMessages: {
            show: "navigationChangedTo:discover",
            hide: "navigationChangedFrom:discover",
            stateChange: "navigationStateChange:discover"
        }
    });

    function onVisualFilter(id, ctx) {
        ctx.services.searchFiltering.getChild(id, function (data) {
            ctx.controls.searchFiltering.update(data);
        });
    }

    function showList(ctx) {
        ctx.controls.searchList.show();
        ctx.views.discoverPage.withoutResults();
        ctx.controls.breadcrumb.hideTopic();
        ctx.controls.searchFiltering.layoutChange();
        ctx.controls.searchResults.hide();
    }

    function hideList(ctx) {
        ctx.controls.searchList.hide();
        ctx.views.discoverPage.withResults();
        ctx.controls.breadcrumb.showTopic(ctx.controls.searchList.currentFilterInfo);
        ctx.controls.searchFiltering.layoutChange();
        ctx.controls.searchResults.show();
        ctx.services.searchResults.fetch(function(data) {
            ctx.controls.searchResults.update(data);
        });
    }

    function hideQuestions(ctx) {
        ctx.controls.questions.hide();
    }

    function showQuestions(ctx) {
        ctx.controls.questions.show();
    }

    function hideBreadcrumb(ctx) {
        ctx.controls.breadcrumb.hide();
    }

    function showBreadcrumb(ctx, id) {
        ctx.controls.breadcrumb.update(ctx.services.searchList.getMetaInfo(id), id);
    }

    function showSearchFiltering(ctx) {
        var searchFiltering = ctx.controls.searchFiltering;
        searchFiltering.show();
        ctx.services.searchFiltering.fetch(searchFiltering, searchFiltering.update);
    }

    function hideSearchFiltering(ctx) {
        ctx.controls.searchFiltering.hide();
    }

    function loadSearchItem(ctx, id) {
        ctx.services.searchList.fetch(ctx, id, function (data) {
            ctx.controls.searchList.update(id, data);
        });
    }

}(HAF));
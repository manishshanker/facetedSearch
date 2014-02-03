(function (HAF) {
    "use strict";

    APP.controller.DiscoverPage = HAF.Controller.extend({
        autoLoadControls: true,
        autoShowHide: true,
        injectLocalMessageBus: true,
        inject: {
            views: ["discoverPage"],
            controls: ["searchList", "breadcrumb", "searchFiltering", "questions", "searchResults"],
            services: ["searchList", "searchFiltering", "searchResults"]
        },
        load: function () {
            var that = this;
            that._super();
            that.localMessageBus.subscribe(that, {
                "search-list-hide": function () {
                    hideList(that);
                },
                "search-list-show": function () {
                    showList(that);
                },
                "search-filtering-changed": function (id) {
                    onSearchFilteringChanged(id, that);
                }
            });
        },
        routes: {
            "/discover/:id": function (id) {
                showResults(this, id);
            },
            "/discover": function () {
                hideResults(this);
            }
        },
        controlMessages: {
            show: "navigationChangedTo:discover",
            hide: "navigationChangedFrom:discover",
            stateChange: "navigationStateChange:discover"
        }
    });

    function hideResults(ctx) {
        loadSearchItem(ctx);
        hideSearchFiltering(ctx);
        hideBreadcrumb(ctx);
        showQuestions(ctx);
        showList(ctx);
    }

    function showResults(ctx, id) {
        loadSearchItem(ctx, id);
        showSearchFiltering(ctx);
        showBreadcrumb(ctx, id);
        hideQuestions(ctx);
    }

    function onSearchFilteringChanged(id, ctx) {
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
        ctx.controls.breadcrumb.showTopic(ctx.services.searchList.currentFilterInfo);
        ctx.controls.searchFiltering.layoutChange();
        ctx.controls.searchResults.show();
        ctx.services.searchResults.fetch(function (data) {
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
        ctx.views.discoverPage.withoutBreadcrumb();
        ctx.controls.breadcrumb.hide();
    }

    function showBreadcrumb(ctx, ids) {
        ctx.views.discoverPage.withBreadcrumb();
        ctx.services.searchList.getMetaInfo(ctx, ids, function (data) {
            ctx.controls.breadcrumb.update(data, ids);
        });
    }

    function showSearchFiltering(ctx) {
        var searchFiltering = ctx.controls.searchFiltering;
        searchFiltering.show();
        ctx.services.searchFiltering.fetch(searchFiltering, searchFiltering.update);
    }

    function hideSearchFiltering(ctx) {
        ctx.controls.searchFiltering.hide();
    }

    function loadSearchItem(ctx, ids) {
        ctx.services.searchList.fetch(ctx, ids, function (data) {
            ctx.controls.searchList.update(ids, data);
        });
    }

}(HAF));
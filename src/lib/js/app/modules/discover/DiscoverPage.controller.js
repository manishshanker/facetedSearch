(function (HAF) {
    "use strict";

    APP.controller.DiscoverPage = HAF.Controller.extend({
        autoLoadControls: true,
        autoShowHide: true,
        injectLocalMessageBus: true,
        inject: {
            views: ["discoverPage"],
            controls: ["searchList", "breadcrumb", "searchFiltering", "questions", "searchResults"]
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
        ctx.controls.breadcrumb.showTopic(ctx.controls.searchList.getCurrentFilterInfo());
        ctx.controls.searchFiltering.layoutChange();
        ctx.controls.searchResults.show();
        ctx.controls.searchResults.fetch();
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
        ctx.controls.searchList.getMetaInfo(ids, function(metaInfo) {
            ctx.controls.breadcrumb.update(metaInfo, ids);
        });
    }

    function showSearchFiltering(ctx) {
        var searchFiltering = ctx.controls.searchFiltering;
        searchFiltering.show();
        ctx.controls.searchFiltering.fetch();
    }

    function hideSearchFiltering(ctx) {
        ctx.controls.searchFiltering.hide();
    }

    function loadSearchItem(ctx, ids) {
        ctx.controls.searchList.load(ids);
    }

}(HAF));
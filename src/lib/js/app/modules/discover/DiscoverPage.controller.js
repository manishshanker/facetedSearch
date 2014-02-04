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
                showFiltering(this, id);
            },
            "/discover": function () {
                hideFiltering(this);
            }
        },
        controlMessages: {
            show: "navigationChangedTo:discover",
            hide: "navigationChangedFrom:discover",
            stateChange: "navigationStateChange:discover"
        }
    });

    function hideFiltering(ctx) {
        loadSearchItem(ctx);
        hideSearchFiltering(ctx);
        hideBreadcrumb(ctx);
        showQuestions(ctx);
        showList(ctx);
    }

    function showFiltering(ctx, id) {
        loadSearchItem(ctx, id);
        showSearchFiltering(ctx);
        showBreadcrumb(ctx, id);
        hideQuestions(ctx);
        ctx.controls.searchList.show(false);
    }

    function showList(ctx) {
        ctx.controls.searchList.show(true);
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
        ctx.controls.searchResults.update();
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
        ctx.controls.searchFiltering.update();
    }

    function hideSearchFiltering(ctx) {
        ctx.controls.searchFiltering.hide();
    }

    function loadSearchItem(ctx, id) {
        ctx.controls.searchList.update(id);
    }

}(HAF));
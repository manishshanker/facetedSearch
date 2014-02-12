(function (Mettle) {
    "use strict";

    ICEX.controller.DiscoverPage = Mettle.Controller.extend({
        autoLoadControls: true,
        injectLocalMessageBus: true,
        inject: {
            views: ["discoverPage"],
            controls: ["searchList", "breadcrumb", "searchFiltering", "questions", "searchResults", "modalDialog"]
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
                "app-modules-discover-controls-searchResults-item-selected": function(data) {
                    showDialog(that, data);
                },
                "search-filtering-changed": function(id) {
                    this.controls.searchResults.update(id);
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
        ctx.controls.modalDialog.hide();
        loadSearchItem(ctx);
        hideSearchFiltering(ctx);
        hideBreadcrumb(ctx);
        showQuestions(ctx);
        showList(ctx);
    }

    function showFiltering(ctx, id) {
        ctx.controls.modalDialog.hide();
        loadSearchItem(ctx, id);
        showSearchFiltering(ctx);
        showBreadcrumb(ctx, id);
        hideQuestions(ctx);
    }

    function showDialog(ctx, data) {
        ctx.controls.modalDialog.show(data);
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

}(Mettle));
load({dependencyMap: {
    handlebars: "../vendor/handlebars-v1.1.2",
    jquery: "../vendor/jquery.min",
    jit: "../vendor/jit",
    vis: "../vendor/vis.min.patched",
    jqueryUI: {
        file: "../vendor/jquery-ui-1.10.4.custom.min",
        deps: ["jquery"]
    },
    jqueryTab: {
        file: "plugins/jquery.tab",
        deps: ["jquery", "jqueryUI"]
    },
    HAF: {
        file: "../vendor/HAF.min",
        deps: ["jquery", "handlebars"]
    },
    hbUrlWithBaseHelper: {
        file: "plugins/hb.urlWithBaseHelper",
        deps: ["handlebars"]
    },
    namespace: "namespace",
    serviceURLs: "serviceURLs",

    "GlobalSearchController": {
        file: "modules/globalSearch/GlobalSearch.controller",
        deps: ["GlobalSearchView", "GlobalSearchServiceTemplate", "GlobalSearchServiceMock"]
    },
    "GlobalSearchServiceTemplate": {
        file: "modules/globalSearch/GlobalSearch.template",
        deps: ["HAF"]
    },
    "GlobalSearchService": {
        file: "modules/globalSearch/GlobalSearch.service",
        deps: ["HAF"]
    },
    "GlobalSearchServiceMock": {
        file: "../../../../test/mockServices/globalSearch/GlobalSearch.service",
        deps: ["GlobalSearchService"]
    },
    "GlobalSearchView": {
        file: "modules/globalSearch/GlobalSearch.view",
        deps: ["HAF", "jqueryUI"]
    },
    "ListFilteringController": {
        file: "modules/discover/controls/searchFiltering/listFiltering/ListFiltering.controller",
        deps: ["ListFilteringView", "ListFilteringService"]
    },
    "ListFilteringService": {
        file: "modules/discover/controls/searchFiltering/listFiltering/ListFiltering.service",
        deps: ["HAF"]
    },
    "ListFilteringView": {
        file: "modules/discover/controls/searchFiltering/listFiltering/ListFiltering.view",
        deps: ["HAF"]
    },
    "VisualFilteringController": {
        file: "modules/discover/controls/searchFiltering/visualFiltering/VisualFiltering.controller",
        deps: ["VisualFilteringView", "VisualFilteringService"]
    },
    "VisualFilteringService": {
        file: "modules/discover/controls/searchFiltering/visualFiltering/VisualFiltering.service",
        deps: ["HAF"]
    },
//    "VisualFilteringCircularService": {
//        file: "modules/discover/controls/searchFiltering/visualFiltering/VisualFilteringCircular.service",
//        deps: ["HAF"]
//    },
//    "VisualFilteringCircularView": {
//        file: "modules/discover/controls/searchFiltering/visualFiltering/VisualFilteringCircular.view",
//        deps: ["HAF", "vis"]
//    },
    "VisualFilteringView": {
        file: "modules/discover/controls/searchFiltering/visualFiltering/VisualFiltering.view",
        deps: ["HAF", "jit"]
    },
    "SearchListView": {
        file: "modules/discover/controls/searchList/SearchList.view",
        deps: ["HAF"]
    },
    "SearchListService": {
        file: "modules/discover/controls/searchList/SearchList.service",
        deps: ["HAF"]
    },
    "SearchListServiceMock": {
        file: "../../../../test/mockServices/discover/controls/searchList/SearchList.service",
        deps: ["SearchListService"]
    },
    "SearchListController": {
        file: "modules/discover/controls/searchList/SearchList.controller",
        deps: ["SearchListView", "SearchListServiceMock"]
    },

    "SearchFilteringView": {
        file: "modules/discover/controls/searchFiltering/SearchFiltering.view",
        deps: ["HAF", "jqueryTab"]
    },
    "SearchFilteringService": {
        file: "modules/discover/controls/searchFiltering/SearchFiltering.service",
        deps: ["HAF"]
    },
    "SearchFilteringController": {
        file: "modules/discover/controls/searchFiltering/SearchFiltering.controller",
        deps: ["SearchFiltering.dependency", "SearchFilteringView", "VisualFilteringController", "ListFilteringController", "SearchFilteringServiceMock"]
    },
    "SearchFiltering.dependency": {
        file: "modules/discover/controls/searchFiltering/SearchFiltering.dependency"
    },
    "SearchFilteringServiceMock": {
        file: "../../../../test/mockServices/discover/controls/searchFiltering/SearchFiltering.service",
        deps: ["SearchFilteringService"]
    },

    "SearchResultsView": {
        file: "modules/discover/controls/searchResults/SearchResults.view",
        deps: ["HAF"]
    },
    "SearchResultsService": {
        file: "modules/discover/controls/searchResults/SearchResults.service",
        deps: ["HAF"]
    },
    "SearchResultsController": {
        file: "modules/discover/controls/searchResults/SearchResults.controller",
        deps: ["SearchResultsView", "SearchResultsService"]
    },
    "QuestionsController": {
        file: "modules/discover/controls/questions/Questions.controller",
        deps: ["QuestionsView"]
    },
    "QuestionsView": {
        file: "modules/discover/controls/questions/Questions.view",
        deps: ["HAF"]
    },
    "BreadcrumbView": {
        file: "modules/discover/controls/breadcrumb/Breadcrumb.view",
        deps: ["HAF"]
    },
    "BreadcrumbController": {
        file: "modules/discover/controls/breadcrumb/Breadcrumb.controller",
        deps: ["BreadcrumbView"]
    },
    "DiscoverPageView": {
        file: "modules/discover/DiscoverPage.view",
        deps: ["HAF"]
    },
    "DiscoverPageController": {
        file: "modules/discover/DiscoverPage.controller",
        deps: ["DiscoverPageView", "SearchListController", "SearchFilteringController", "SearchResultsController", "QuestionsController", "BreadcrumbController"]
    },

    appCache: "appCache",

    main: {
        file: "main",
        deps: [
            "HAF", "namespace", "serviceURLs", "hbUrlWithBaseHelper", "appCache",
            "GlobalSearchController", "DiscoverPageController"
        ]
    }
}});

function load(dmap) {
    "use strict";
    var dependency;
    var config = {};
    config.paths = {};
    config.shim = {};
    for (dependency in dmap.dependencyMap) {
        if (dmap.dependencyMap.hasOwnProperty(dependency)) {
            var value = dmap.dependencyMap[dependency];
            if ((typeof value === "string")) {
                config.paths[dependency] = value;
            } else {
                config.paths[dependency] = value.file;
                config.shim[dependency] = {};
                config.shim[dependency].deps = value.deps;
            }
        }
    }
    requirejs.config(config);
    define(["main"], function () {});
}



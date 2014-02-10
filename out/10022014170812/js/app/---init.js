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
    Mettle: {
        file: "../vendor/Mettle.min",
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
        deps: ["Mettle"]
    },
    "GlobalSearchService": {
        file: "modules/globalSearch/GlobalSearch.service",
        deps: ["Mettle"]
    },
    "GlobalSearchServiceMock": {
        file: "../../../../test/mockServices/globalSearch/GlobalSearch.service",
        deps: ["GlobalSearchService"]
    },
    "GlobalSearchView": {
        file: "modules/globalSearch/GlobalSearch.view",
        deps: ["Mettle", "jqueryUI"]
    },
    "ListFilteringController": {
        file: "modules/discover/controls/searchFiltering/listFiltering/ListFiltering.controller",
        deps: ["ListFilteringView", "ListFilteringService"]
    },
    "ListFilteringService": {
        file: "modules/discover/controls/searchFiltering/listFiltering/ListFiltering.service",
        deps: ["Mettle"]
    },
    "ListFilteringView": {
        file: "modules/discover/controls/searchFiltering/listFiltering/ListFiltering.view",
        deps: ["Mettle"]
    },
    "VisualFilteringController": {
        file: "modules/discover/controls/searchFiltering/visualFiltering/VisualFiltering.controller",
        deps: ["VisualFilteringView", "VisualFilteringService"]
    },
    "VisualFilteringService": {
        file: "modules/discover/controls/searchFiltering/visualFiltering/VisualFiltering.service",
        deps: ["Mettle"]
    },
//    "VisualFilteringCircularService": {
//        file: "modules/discover/controls/searchFiltering/visualFiltering/VisualFilteringCircular.service",
//        deps: ["Mettle"]
//    },
//    "VisualFilteringCircularView": {
//        file: "modules/discover/controls/searchFiltering/visualFiltering/VisualFilteringCircular.view",
//        deps: ["Mettle", "vis"]
//    },
    "VisualFilteringView": {
        file: "modules/discover/controls/searchFiltering/visualFiltering/VisualFiltering.view",
        deps: ["Mettle", "jit"]
    },
    "SearchListView": {
        file: "modules/discover/controls/searchList/SearchList.view",
        deps: ["Mettle"]
    },
    "SearchListService": {
        file: "modules/discover/controls/searchList/SearchList.service",
        deps: ["Mettle"]
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
        deps: ["Mettle", "jqueryTab"]
    },
    "SearchFilteringService": {
        file: "modules/discover/controls/searchFiltering/SearchFiltering.service",
        deps: ["Mettle"]
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
        deps: ["Mettle"]
    },
    "SearchResultsService": {
        file: "modules/discover/controls/searchResults/SearchResults.service",
        deps: ["Mettle"]
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
        deps: ["Mettle"]
    },
    "BreadcrumbView": {
        file: "modules/discover/controls/breadcrumb/Breadcrumb.view",
        deps: ["Mettle"]
    },
    "BreadcrumbController": {
        file: "modules/discover/controls/breadcrumb/Breadcrumb.controller",
        deps: ["BreadcrumbView"]
    },
    "DiscoverPageView": {
        file: "modules/discover/DiscoverPage.view",
        deps: ["Mettle"]
    },
    "DiscoverPageController": {
        file: "modules/discover/DiscoverPage.controller",
        deps: ["DiscoverPageView", "SearchListController", "SearchFilteringController", "SearchResultsController", "QuestionsController", "BreadcrumbController"]
    },

    appCache: "appCache",

    main: {
        file: "main",
        deps: [
            "Mettle", "namespace", "serviceURLs", "hbUrlWithBaseHelper", "appCache",
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



(function (HAF) {
    "use strict";

    HAF.init(APP, APP.i18nT);

    HAF.each({
        discoverPage: new APP.controller.DiscoverPage(),
        search: new APP.controller.GlobalSearch()
    }, function(module) {
        module.load();
    });

    HAF.navigation.load("discover");

}(HAF));
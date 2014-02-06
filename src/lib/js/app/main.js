(function (HAF) {
    "use strict";

    HAF.init(ICEX, ICEX.i18nT);

    HAF.each({
        discoverPage: new ICEX.controller.DiscoverPage(),
        search: new ICEX.controller.GlobalSearch()
    }, function(module) {
        module.load();
    });

    HAF.navigation.load("discover");

}(HAF));
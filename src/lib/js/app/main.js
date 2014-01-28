(function (HAF) {
    "use strict";

    HAF.init(APP, APP.i18nT);

    new APP.controller.DiscoverPage().load();

    HAF.navigation.load("discover");

}(HAF));
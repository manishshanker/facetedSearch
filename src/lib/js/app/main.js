(function (Mettle) {
    "use strict";

    Mettle.Template.LOAD.BY_URL_DEFAULT_PATH = "lib/templates";

    Mettle.init(ICEX, ICEX.i18nT);

    Mettle.each({
        discoverPage: new ICEX.controller.DiscoverPage(),
        search: new ICEX.controller.GlobalSearch()
    }, function(module) {
        module.load();
    });

    Mettle.navigation.load("discover");

}(Mettle));
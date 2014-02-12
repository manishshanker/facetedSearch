(function (Mettle) {
    "use strict";

    Mettle
        .init(ICEX, ICEX.i18nT, Mettle.LOG_LEVEL.WARN)
        .modules({
            authentication: ICEX.controller.Authentication,
            search: ICEX.controller.GlobalSearch,
            discover: ICEX.controller.DiscoverPage
        })
        .start("discover");

}(Mettle));
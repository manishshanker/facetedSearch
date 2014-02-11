(function (Mettle) {
    "use strict";

    Mettle
        .init(ICEX, ICEX.i18nT)
        .modules({
            search: ICEX.controller.GlobalSearch,
            discover: ICEX.controller.DiscoverPage
        })
        .start("discover");

}(Mettle));
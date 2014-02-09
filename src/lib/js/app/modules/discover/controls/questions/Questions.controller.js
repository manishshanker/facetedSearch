(function (Mettle) {
    "use strict";

    ICEX.controller.Questions = Mettle.Controller.extend({
        autoShowHide: true,
        inject: {
            views: ["questions"]
        }
    });

}(Mettle));
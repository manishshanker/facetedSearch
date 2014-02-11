(function (Mettle) {
    "use strict";

    ICEX.controller.ModalDialog = Mettle.Controller.extend({
        autoShowHide: true,
        inject: {
            views: ["modalDialog"]
        }
    });

}(Mettle));
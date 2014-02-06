(function (HAF) {
    "use strict";

    ICEX.controller.Questions = HAF.Controller.extend({
        autoShowHide: true,
        inject: {
            views: ["questions"]
        }
    });

}(HAF));
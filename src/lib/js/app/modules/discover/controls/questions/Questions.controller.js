(function (HAF) {
    "use strict";

    APP.controller.Questions = HAF.Controller.extend({
        autoShowHide: true,
        inject: {
            views: ["questions"]
        }
    });

}(HAF));
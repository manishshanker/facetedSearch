(function (HAF) {
    "use strict";

    APP.controller.Questions = HAF.Controller.extend({
        autoShowHide: true,
        inject: function () {
            return {
                views: {
                    questions: new APP.view.Questions()
                }
            };
        }
    });

}(HAF));
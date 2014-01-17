(function (HAF) {
    "use strict";

    APP.controller.Questions = HAF.Controller.extend({
        autoShowHide: true,
        init: function () {
            this.inject({
                views: {
                    questions: new APP.view.Questions()
                }
            });
        }
    });

}(HAF));
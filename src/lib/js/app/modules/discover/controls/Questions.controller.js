(function (HAF) {
    "use strict";

    APP.controller.Questions = HAF.Controller.extend({
        init: function () {
            this.inject({
                views: {
                    questions: new APP.view.Questions()
                }
            });
        },
        hide: function () {
            this.views.questions.hide();
        },
        show: function () {
            this.views.questions.show();
        }
    });

}(HAF));
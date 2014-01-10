(function (HAF) {
    "use strict";

    APP.view.Questions = HAF.View.extend({
        container: "#discover .questions",
        hide: function () {
            this.$el.removeClass("show");
        },
        show: function() {
            this.$el.addClass("show");
        }
    });

}(HAF));
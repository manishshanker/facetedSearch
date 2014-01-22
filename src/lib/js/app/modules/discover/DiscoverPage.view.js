(function (HAF) {
    "use strict";

    APP.view.DiscoverPage = HAF.View.extend({
        container: "#discover",
        withResults: function () {
            this.$el.find(".sub-content").addClass("with-results");

        },
        withoutResults: function () {
            this.$el.find(".sub-content").removeClass("with-results");
        }
    });

}(HAF));
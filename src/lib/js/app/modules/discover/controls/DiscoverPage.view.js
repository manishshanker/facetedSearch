(function (HAF, $) {
    "use strict";

    APP.view.DiscoverPage = HAF.View.extend({
        container: "#discover",
        withResults: function() {
            this.$el.find(".sub-content").addClass("with-results");
            this.$el.find("#appSearchResults").addClass("show");

        },
        withoutResults: function() {
            this.$el.find(".sub-content").removeClass("with-results");
            this.$el.find("#appSearchResults").removeClass("show");
        }
    });

}(HAF, jQuery));
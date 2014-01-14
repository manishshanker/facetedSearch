(function (HAF, $) {
    "use strict";

    APP.view.DiscoverPage = HAF.View.extend({
        container: "#discover",
        withResults: function() {
            this.$el.find(".sub-content").addClass("with-results");
        }
    });

}(HAF, jQuery));
(function (HAF) {
    "use strict";

    ICEX.view.DiscoverPage = HAF.View.extend({
        container: "#discover",
        withResults: function () {
            this.$el.find(".sub-content").addClass("with-results");

        },
        withoutResults: function () {
            this.$el.find(".sub-content").removeClass("with-results");
        },
        withBreadcrumb: function () {
            this.$el.find(".content").addClass("with-breadcrumb");

        },
        withoutBreadcrumb: function () {
            this.$el.find(".content").removeClass("with-breadcrumb");
        }
    });

}(HAF));
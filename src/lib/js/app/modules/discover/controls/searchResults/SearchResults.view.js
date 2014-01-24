(function (HAF, $) {
    "use strict";

    APP.view.SearchResults = HAF.View.extend({
        container: "#appSearchResults",
        autoManageEventBind: true,
        bindings: {
            "mouseenter .results-item": function (e, item) {
                $(item).addClass("item-hover");
            },
            "mouseleave .results-item": function (e, item) {
                $(item).removeClass("item-hover");
            },
            "click .show-more": function (e, item) {
                $(item).parents(".results-item").eq(0).addClass("show-all");
                e.preventDefault();
            },
            "click .show-less": function (e, item) {
                $(item).parents(".results-item").eq(0).removeClass("show-all");
                e.preventDefault();
            }
        },
        show: function () {
            this.$el.addClass("show");
        },
        hide: function () {
            this.$el.removeClass("show");
        }
    });

}(HAF, jQuery));
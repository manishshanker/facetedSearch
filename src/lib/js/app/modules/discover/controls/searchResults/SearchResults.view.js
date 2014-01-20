(function (HAF, $) {
    "use strict";

    APP.view.SearchResults = HAF.View.extend({
        container: "#appSearchResults",
        bindings: {
            "mouseenter .results-item": function(e, item) {
                $(item).addClass("item-hover");
            },
            "mouseleave .results-item": function(e, item) {
                $(item).removeClass("item-hover");
            }
        },
        show: function() {
            this.$el.addClass("show");
        },
        hide: function() {
            this.$el.removeClass("show");
        }
    });

}(HAF, jQuery));
(function (Mettle, $) {
    "use strict";

    ICEX.view.SearchResults = Mettle.View.extend({
        container: "#appSearchResults",
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
                e.stopPropagation();
            },
            "click .show-less": function (e, item) {
                $(item).parents(".results-item").eq(0).removeClass("show-all");
                e.preventDefault();
                e.stopPropagation();
            },
            "click .results-item": function() {
                this.messageBus.publish("searchFiltering-itemSelected", {id: 10});
            }
        }
    });

}(Mettle, jQuery));
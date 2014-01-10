(function (HAF) {
    "use strict";

    APP.view.SearchResult = HAF.View.extend({
        container: "#discover .search-result",
        load: function () {
            this.$el.tabs();
        },
        hide: function () {
            this.$el.removeClass("show");
        },
        show: function () {
            this.$el.addClass("show");
        }
    });

}(HAF));

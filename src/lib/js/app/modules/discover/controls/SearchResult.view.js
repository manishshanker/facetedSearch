(function (HAF) {
    "use strict";

    APP.view.SearchResult = HAF.View.extend({
        container: "#appSearchResult",
        load: function () {
            this.$el.tabs();
        },
        hide: function () {
            this.$el.removeClass("show");
        },
        show: function () {
            if (!this.controlLoaded) {
                this.load();
                this.controlLoaded = true;
            }
            this.$el.addClass("show");
        }
    });

}(HAF));

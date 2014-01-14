(function (HAF) {
    "use strict";

    APP.view.SearchFiltering = HAF.View.extend({
        container: "#appSearchFiltering",
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

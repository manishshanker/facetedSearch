(function (HAF) {
    "use strict";

    APP.view.SearchFiltering = HAF.View.extend({
        container: "#appSearchFiltering",
        load: function () {
            var that = this;
            that.$el.tabs({
                onChange: function(data) {
                    that.messageBus.publish("search-filter-tab-changes", data);
                }
            });
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

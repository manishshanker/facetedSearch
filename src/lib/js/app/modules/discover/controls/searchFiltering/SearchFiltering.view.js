(function (HAF) {
    "use strict";

    APP.view.SearchFiltering = HAF.View.extend({
        container: "#appSearchFiltering",
        render: function() {
            var that = this;
            that.$el.tabs({
                onChange: function(data) {
                    that.messageBus.publish("search-filter-tab-changes", data);
                }
            });
        }
    });

}(HAF));

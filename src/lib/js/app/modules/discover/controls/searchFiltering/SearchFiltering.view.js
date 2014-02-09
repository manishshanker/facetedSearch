(function (Mettle) {
    "use strict";

    ICEX.view.SearchFiltering = Mettle.View.extend({
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

}(Mettle));

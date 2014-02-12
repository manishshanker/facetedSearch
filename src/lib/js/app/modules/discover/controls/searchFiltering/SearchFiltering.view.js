(function (Mettle) {
    "use strict";

    ICEX.view.SearchFiltering = Mettle.View.extend({
        container: "#appSearchFiltering",
        render: function() {
            var that = this;
            that.$el.tabs({
                onChange: function(data) {
                    that.messageBus.publish("searchFilter-tabChange", data);
                }
            });
        },
        destroy: function() {
            this.$el.tabs($.tabs.destroy);
            this._super();
        }
    });

}(Mettle));

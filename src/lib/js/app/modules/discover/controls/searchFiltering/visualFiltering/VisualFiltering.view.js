(function (HAF) {
    "use strict";

    APP.view.VisualFiltering = HAF.View.extend({
        container: "#appVisualFiltering",
        graph: null,
        lastDataSet: null,
        render: function (data) {
            this.lastDataSet = data;
            var that = this;
            var container = that.$el[0];
            var options = {
                nodes: {
                    fontSize: 11,
                    color: {background: "#cccccc"}
                }
            };
            that.graph = new vis.Graph(container, data, options);
        },
        hide: function() {
            $(window).off("resize.visualFilteringRender");
        },
        layoutChange: function() {
            var that = this;
            that.$el.empty();
            that.render(that.lastDataSet);
        },
        show: function() {
            var that = this;
            $(window).off("resize.visualFilteringRender").on("resize.visualFilteringRender", function() {
                that.layoutChange();
            });
        }
    });

}(HAF));



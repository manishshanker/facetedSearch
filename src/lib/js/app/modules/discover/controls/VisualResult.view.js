(function (HAF) {
    "use strict";

    APP.view.VisualResult = HAF.View.extend({
        container: "#appVisualResult",
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
            $(window).off("resize.visualResultRender");
        },
        show: function() {
            var that = this;
            $(window).off("resize.visualResultRender").on("resize.visualResultRender", function() {
                that.$el.empty();
                that.render(that.lastDataSet);
            });
        }
    });

}(HAF));



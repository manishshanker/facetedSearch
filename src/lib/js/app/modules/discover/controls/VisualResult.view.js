(function (HAF) {
    "use strict";

    APP.view.VisualResult = HAF.View.extend({
        container: "#appVisualResult",
        graph: null,
        render: function (data) {
            var that = this;
            var container = that.$el[0];
            var options = {
                nodes: {
                    fontSize: 11
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
                that.graph.redraw();
            });
        }
    });

}(HAF));



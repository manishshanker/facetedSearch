(function (HAF, $) {
    "use strict";

    APP.view.VisualFiltering = HAF.View.extend({
        container: "#appVisualFiltering",
        messageBus: null,
        graph: null,
        render: function (data) {
            var that = this;
            var container = that.$el[0];
            var options = {
                nodes: {
                    fontSize: 11,
                    color: {background: "#cccccc"}
                }
            };
            that.graph = new vis.Graph(container, data, options);
            vis.events.addListener(that.graph, "select", $.proxy(onSelect, that));
        },
        hide: function() {
            $(window).off("resize.visualFilteringRender");
        },
        layoutChange: function(data) {
            var that = this;
            vis.events.removeListener(that.graph, "select", onSelect);
            that.$el.empty();
            that.render(data);
        },
        show: function() {
            var that = this;
            $(window).off("resize.visualFilteringRender").on("resize.visualFilteringRender", function() {
                that.messageBus.publish("visual-filtering-layout-change");
            });
        }
    });

    function onSelect() {
        var selectItemId = parseInt(this.graph.getSelection());
        this.messageBus.publish("visual-filtering-filtered", selectItemId);
    }

}(HAF, jQuery));



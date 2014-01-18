(function (HAF, $) {
    "use strict";

    APP.view.VisualFiltering = HAF.View.extend({
        autoLayout: true,
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
        layoutChange: function(data) {
            var that = this;
            vis.events.removeListener(that.graph, "select", onSelect);
            that.$el.empty();
            that.render(data);
        }
    });

    function onSelect() {
        var selectItemId = parseInt(this.graph.getSelection());
        this.messageBus.publish("visual-filtering-filtered", selectItemId);
    }

}(HAF, jQuery));



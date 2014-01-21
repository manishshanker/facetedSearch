(function (HAF, $) {
    "use strict";

    APP.view.VisualFiltering = HAF.View.extend({
        autoLayout: true,
        container: "#appVisualFiltering",
        messageBus: null,
        graph: null,
        lastSelectedNode: null,
        lastDataSet: null,
        render: function (data) {
            var that = this;
            that.lastDataSet = data;
            hideGraph(that);
            setTimeout(function () {
                renderGraph(that, data);
                showGraph(that);
            }, 300);
        },
        layoutChange: function () {
            var that = this;
            that.$el.find(".graph-frame").css({
                opacity: 0
            });
            setTimeout(function() {
                that.render(that.lastDataSet);
                that.graph.redraw();
                setTimeout(function() {
                    showGraph(that);
                }, 500)
            }, 500);
        }
    });

    function hideGraph(that) {
        that.$el.find(".graph-frame").animate({
            opacity: 0
        }, 200)
    }

    function showGraph(that) {
        that.$el.find(".graph-frame").animate({
            opacity: 1
        }, 200)
    }

    function renderGraph(that, data) {
        var container = that.$el[0];
        var options = {
            nodes: {
                fontSize: 11,
                color: {background: "#cccccc"}
            }
        };
        that.graph = that.graph || new vis.Graph(container, {}, options);
        that.graph.setData(data);
        if (!that.loaded) {
            vis.events.addListener(that.graph, "select", $.proxy(onSelect, that));
            that.loaded = true;
        }
    }

    function onSelect() {
        var that = this;
        var selectItemId = parseInt(that.graph.getSelection());
        if (that.lastSelectedNode === selectItemId) {
            that.messageBus.publish("visual-filtering-filtered", selectItemId);
            that.lastSelectedNode = null;
        }
        that.lastSelectedNode = selectItemId;
        that.graph.setSelection([]);
    }

}(HAF, jQuery));



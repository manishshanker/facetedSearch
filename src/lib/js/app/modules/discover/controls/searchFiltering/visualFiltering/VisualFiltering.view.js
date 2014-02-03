(function (HAF) {
    "use strict";

    var GRAPH_OPTIONS = {
        nodes: {
            fontSize: 11,
            color: {
                background: "#cccccc"
            },
            shape: "dot",
            radius: 3
        },
        edges: {
            color: "#ddd",
            length: 50
        }
    };


    APP.view.VisualFiltering = HAF.View.extend({
        autoLayout: true,
        container: "#appVisualFiltering",
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
                that.$el.removeClass("loading");
            }, 300);
        },
        layoutChange: function () {
            var that = this;
            if (!that.loaded) {
                return;
            }
            that.$el.find(".graph").css({
                opacity: 0
            });
            clearTimeout(this.rerenderTimer);
            this.rerenderTimer = setTimeout(function () {
                that.render(that.lastDataSet);
                that.graph.redraw();
                setTimeout(function () {
                    showGraph(that);
                }, 500);
            }, 500);
        },
        setStateLoading: function() {
            this.$el.addClass("loading");
        }
    });

    function hideGraph(that) {
        that.$el.find(".graph").animate({
            opacity: 0
        }, 200);
    }

    function showGraph(that) {
        that.$el.find(".graph").animate({
            opacity: 1
        }, 200);
    }

    function renderGraph(that, data) {
        var container = that.$el.find(".graph")[0];
        that.graph = that.graph || new vis.Graph(container, {}, GRAPH_OPTIONS);
        that.graph.setData(data);
        if (!that.loaded) {
            vis.events.addListener(that.graph, "select", function () {
                onSelect(that);
            });
            that.loaded = true;
        }
    }

    function onSelect(ctx) {
        var selectedItems = ctx.graph.getSelection();
        var selectedItemId = (selectedItems && selectedItems.length && selectedItems[0]) || null;
        if (ctx.lastSelectedNode === selectedItemId) {
            ctx.messageBus.publish("search-filtering-changed", selectedItemId);
            ctx.lastSelectedNode = null;
        }
        ctx.lastSelectedNode = selectedItemId;
        ctx.graph.setSelection([]);
    }

}(HAF));



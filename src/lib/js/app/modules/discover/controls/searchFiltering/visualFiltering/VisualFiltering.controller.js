(function (HAF) {
    "use strict";

    APP.controller.VisualFiltering = HAF.Controller.extend({
        autoLayout: true,
        injectLocalMessageBus: true,
        inject: {
            views: ["visualFiltering"],
            services: ["visualFiltering"]
        },
        load: function() {
            var that = this;
            that.localMessageBus.subscribe("search-filtering-changed", function (id) {
                if (/^I_/.test(id)) {
                    that.views.visualFiltering.setStateLoading();
                    that.messageBus.publish("search-filtering-changed", that.services.visualFiltering.parseId(id));
                }
            });
        },
        update: function (data) {
            var that = this;
            data = that.services.visualFiltering.transformData(data, this.views.visualFiltering.getStyle());
            var graphData = getNewDataSet(that);
            graphData.nodes.add(data.nodes);
            graphData.edges.add(data.edges);
            this.views.visualFiltering.render(graphData);
        }
    });

    function getNewDataSet(ctx) {
        if (ctx.lastDataSet) {
            ctx.lastDataSet.nodes.clear();
            ctx.lastDataSet.edges.clear();
        }
        return{
            nodes: new vis.DataSet(),
            edges: new vis.DataSet()
        };
    }

}(HAF));
(function (HAF) {
    "use strict";

    APP.controller.VisualFiltering = HAF.Controller.extend({
        autoLayout: true,
        inject: function () {
            return {
                views: {
                    visualFiltering: new APP.view.VisualFiltering(this.messageBus)
                }
            };
        },
        update: function(data) {
            var graphData = getNewDataSet(this);
            addDataToGraph(graphData, data);
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

    function addDataToGraph(dataset, data) {
        var parentId = data.id;
        var nodes = dataset.nodes;
        var edges = dataset.edges;
        addParentNodeToGraph(dataset, data);
        addRelatedNodesToGraph(parentId, data.related, nodes, edges);
    }

    function addRelatedNodesToGraph(parentId, data, nodes, edges) {
        HAF.each(data, function (item) {
            nodes.add({
                id: item.id,
                label: convertSpaceToNewLineAndAddCount(item.title, item.count)
            });
            edges.add({from: parentId, to: item.id});
        });
    }

    function addParentNodeToGraph(dataset, data) {
        dataset.nodes.add({
            id: data.id,
            label: convertSpaceToNewLineAndAddCount(data.title, data.count),
            color: {background: "#000"},
            fontColor: "#ffffff"
        });
    }

    function convertSpaceToNewLineAndAddCount(title, count) {
        return (title + " (" + count + ")").replace(/[\s]/g, "\n");
    }

}(HAF));
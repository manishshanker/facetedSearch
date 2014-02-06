(function (HAF, $) {
    "use strict";

    ICEX.service.VisualFilteringCircular = HAF.Service.extend({
        transformData: transformData,
        parseId: function (id) {
            return id.substr(2);
        }
    });

    function transformData(data, style) {
        var dataset = {
            nodes: [],
            edges: []
        };
        var parentId = "P_" + data.id;
        dataset.nodes.push($.extend({
            id: parentId,
            label: convertSpaceToNewLineAndAddCount(data.title, data.count)
        }, style.parentNode));
        HAF.each(data.relations, function (relation) {
            var relationshipId = "R_" + relation.id;
            dataset.nodes.push($.extend({
                id: relationshipId,
                label: relation.type
            }, style.relationshipNode));
            dataset.edges.push($.extend({
                from: parentId,
                to: relationshipId
            }, style.relationshipEdge));
            HAF.each(relation.items, function (item) {
                var itemId = "I_" + item.id;
                dataset.nodes.push($.extend({
                    id: itemId,
                    label: convertSpaceToNewLineAndAddCount(item.title, item.count)
                }, style.itemNode));
                dataset.edges.push({from: relationshipId, to: itemId});
            });
        });
        var graphData = getNewDataSet(this);
        graphData.nodes.add(dataset.nodes);
        graphData.edges.add(dataset.edges);
        return graphData;
    }

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

    function convertSpaceToNewLineAndAddCount(title, count) {
        return (title + "\n(" + count + ")");
    }

}(HAF, jQuery));
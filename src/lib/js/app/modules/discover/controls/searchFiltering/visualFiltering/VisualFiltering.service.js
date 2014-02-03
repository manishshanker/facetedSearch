(function (HAF) {
    "use strict";

    APP.service.VisualFiltering = HAF.Service.extend({
        transformData: transformData,
        parseId: function (id) {
            return id.substr(2);
        }
    });

    function transformData(data) {
        var dataset = {
            nodes: [],
            edges: []
        };
        var parentId = "P_" + data.id;
        dataset.nodes.push({
            id: parentId,
            label: convertSpaceToNewLineAndAddCount(data.title, data.count),
            color: {background: "#ddd"},
            radius: 10,
            fontSize: 14
        });
        HAF.each(data.relations, function (relation) {
            var relationshipId = "R_" + relation.id;
            dataset.nodes.push({
                id: relationshipId,
                label: relation.type,
                color: {background: "#eea409"}
            });
            dataset.edges.push({
                from: parentId,
                to: relationshipId,
                length: 150
            });
            HAF.each(relation.items, function (item) {
                var itemId = "I_" + item.id;
                dataset.nodes.push({
                    id: itemId,
                    label: convertSpaceToNewLineAndAddCount(item.title, item.count),
                    fontColor: "#555"
                });
                dataset.edges.push({from: relationshipId, to: itemId});
            });
        });
        return dataset;
    }

    function convertSpaceToNewLineAndAddCount(title, count) {
        return (title + "\n(" + count + ")");
    }

}(HAF));
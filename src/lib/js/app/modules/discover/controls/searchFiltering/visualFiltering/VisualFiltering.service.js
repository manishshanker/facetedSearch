(function (HAF, $) {
    "use strict";

    APP.service.VisualFiltering = HAF.Service.extend({
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
        return dataset;
    }

    function convertSpaceToNewLineAndAddCount(title, count) {
        return (title + "\n(" + count + ")");
    }

}(HAF, jQuery));
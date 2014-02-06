(function (HAF, $) {
    "use strict";

    APP.service.VisualFiltering = HAF.Service.extend({
        transformData: transformData,
        parseId: function (id) {
            return id.split("___")[0];
        }
    });

    function transformData(data, style) {
        var dataset = {};
        var timestamp = new Date().getTime();
        dataset.id = data.id + "___" + timestamp;
        dataset.name = convertSpaceToNewLineAndAddCount(data.title, data.count);
        dataset.data = {};
        dataset.children = [];
        var relNodeData = $.extend({
            type: "R"
        }, style.relationshipNode);
        HAF.each(data.relations, function (relation) {
            var child = {
                id: relation.id + "___" + timestamp,
                name: relation.type,
                data: relNodeData,
                children: []
            };
            HAF.each(relation.items, function (item) {
                child.children.push({
                    id: item.id + "___" + timestamp,
                    name: convertSpaceToNewLineAndAddCount(item.title, item.count)
                });
            });
            dataset.children.push(child);
        });
        return dataset;
    }

    function convertSpaceToNewLineAndAddCount(title, count) {
        return (title + " (" + count + ")");
    }

}(HAF, jQuery));
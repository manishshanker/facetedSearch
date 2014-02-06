(function (HAF) {
    "use strict";

    ICEX.service.ListFiltering = HAF.Service.extend({
        transformData: transformData
    });

    function transformData(data) {
        var dataset = {
            relations: []
        };
        var parentId = data.id;
        dataset.relations.push({
            id: parentId,
            title: data.title,
            count: data.count,
            type: "parent"
        });
        HAF.each(data.relations, function (relation) {
            var type = relation.type;
            HAF.each(relation.items, function (item) {
                dataset.relations.push({
                    id: item.id,
                    title: item.title,
                    count: item.count,
                    type: type
                });
            });
        });
        return dataset;
    }

}(HAF));
(function (Mettle) {
    "use strict";

    ICEX.service.ListFiltering = Mettle.Service.extend({
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
        Mettle.each(data.relations, function (relation) {
            var type = relation.type;
            Mettle.each(relation.items, function (item) {
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

}(Mettle));
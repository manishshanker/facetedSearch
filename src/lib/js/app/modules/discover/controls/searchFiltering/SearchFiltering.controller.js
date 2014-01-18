(function (HAF) {
    "use strict";

    APP.controller.SearchFiltering = HAF.Controller.extend({
        autoShowHide: true,
        lastDataSet: null,
        inject: function () {
            return {
                views: {
                    searchFiltering: new APP.view.SearchFiltering(),
                    visualFiltering: new APP.view.VisualFiltering(this.messageBus)
                }
            };
        },
        load: function() {
            this.messageBus.subscribe(this, "visual-filtering-filtered", onVisualFilter);
            this.messageBus.subscribe(this, "visual-filtering-layout-change", onVisualFilterLayoutChange);
        },
        layoutChange: function () {
            this.views.visualFiltering.layoutChange(this.lastDataSet);
        },
        updateFilter: function (data) {
            this.lastDataSet = processResponseForGraph(data, this.lastDataSet.nodes, this.lastDataSet.edges, true);
        },
        render: function (data) {
            this.lastDataSet = processResponseForGraph(data, null, null, false);
            this.views.visualFiltering.render(this.lastDataSet);
        }
    });

    function onVisualFilterLayoutChange() {
        this.views.visualFiltering.layoutChange(this.lastDataSet);
    }

    function onVisualFilter(selectItemId) {
        this.lastDataSet.nodes.remove(this.lastDataSet.nodes.get({
            filter: function (item) {
                return (item.id !== selectItemId);
            }
        }));
    }

    function processResponseForGraph(data, nodes, edges, relatedOnly) {
        var parentId = data.id;
        nodes = nodes || new vis.DataSet();
        edges = edges || new vis.DataSet();
        if (!relatedOnly) {
            nodes.add({
                id: data.id,
                label: convertSpaceToNewLineAndAddCount(data.title, data.count),
                color: {background: "#000"},
                fontColor: "#ffffff"
            });
        }
        HAF.each(data.related, function(item) {
            nodes.add({
                id: item.id,
                label: convertSpaceToNewLineAndAddCount(item.title, item.count)
            });
            edges.add({from: parentId, to: item.id});
        });
        return {
            nodes: nodes,
            edges: edges
        };
    }

    function convertSpaceToNewLineAndAddCount(title, count) {
        return (title + " (" + count + ")").replace(/[\s]/g, "\n");
    }


}(HAF));
(function (HAF) {
    "use strict";

    APP.controller.SearchResult = HAF.Controller.extend({
        autoShowHide: true,
        init: function () {
            this.inject({
                views: {
                    searchResult: new APP.view.SearchResult(),
                    visualResult: new APP.view.VisualResult()
                }
            });
        },
        render: function (data) {
            this.views.visualResult.render(processResponseForGraph(data));
        }
    });

    function processResponseForGraph(data) {
        var parentId = data.id;
        var responseData = {};
        responseData.nodes = [];
        responseData.edges = [];
        responseData.nodes.push({
            id: data.id,
            label: convertSpaceToNewLineAndAddCount(data.title, data.count),
            color: {background: "#000"},
            fontColor: "#ffffff"
        });
        var i;
        for (i in data.related) {
            responseData.nodes.push({
                id: data.related[i].id,
                label: convertSpaceToNewLineAndAddCount(data.related[i].title, data.related[i].count)
            });
            responseData.edges.push({from: parentId, to: data.related[i].id});
        }
        return responseData;
    }

    function convertSpaceToNewLineAndAddCount(title, count) {
        return (title + " (" + count + ")").replace(/[\s]/g, "\n");
    }


}(HAF));
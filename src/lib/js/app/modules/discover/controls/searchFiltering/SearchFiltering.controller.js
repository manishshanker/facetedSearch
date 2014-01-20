(function (HAF) {
    "use strict";

    APP.controller.SearchFiltering = HAF.Controller.extend({
        autoShowHide: true,
        autoLayout: true,
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
        updateFilter: function (data) {
            addRelatedNodesToGraph(data.id, data.related, this.lastDataSet.nodes, this.lastDataSet.edges);
        },
        update: function (data) {
            if (!this.lastDataSet) {
                this.lastDataSet = {
                    nodes: new vis.DataSet(),
                    edges: new vis.DataSet()
                }
            }
            this.lastDataSet.nodes.clear();
            this.lastDataSet.edges.clear();
            this.views.visualFiltering.render(this.lastDataSet);
            addDataToGraph(this.lastDataSet, data);
        },
        hide: function() {
            this._super();
            if (this.lastDataSet) {
                this.lastDataSet.nodes.clear();
                this.lastDataSet.edges.clear();
            }
        }
    });

    function onVisualFilterLayoutChange() {
        this.views.visualFiltering.redraw(this.lastDataSet);
    }

    function onVisualFilter(selectItemId) {
        var that = this;
        var nodesToRemove = this.lastDataSet.nodes.get({
            filter: function (item) {
                return (item.id !== selectItemId);
            }
        });
        var i=1;
        HAF.each(nodesToRemove, function(node) {
            window.setTimeout(function() {
                that.lastDataSet.nodes.remove(node);
            }, 100*(i++));
        });
        window.setTimeout(function() {
            that.views.visualFiltering.redraw(that.lastDataSet);
        }, 100*i);
    }

    function addRelatedNodesToGraph(parentId, data, nodes, edges) {
        var i=1;
        HAF.each(data, function(item) {
            window.setTimeout(function() {
                nodes.add({
                    id: item.id,
                    label: convertSpaceToNewLineAndAddCount(item.title, item.count)
                });
                edges.add({from: parentId, to: item.id});
            }, 100*(i++));
        });
    }

    function addDataToGraph(dataset, data) {
        var parentId = data.id;
        var nodes = dataset.nodes;
        var edges = dataset.edges;
        addParentNodeToGraph(dataset, data);
        addRelatedNodesToGraph(parentId, data.related, nodes, edges);
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
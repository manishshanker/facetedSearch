(function (HAF, $) {
    "use strict";

    APP.service.SearchResult = HAF.Service.extend({
        fetch: function () {
            this.updated.call(this, getMockData());
        }
    });

    function getMockData() {
        var nodes = [
            {id: 1, label: 'Regions (100)'},
            {id: 2, label: 'Balance Sheet (200)'},
            {id: 3, label: 'Activity (400)'},
            {id: 4, label: 'Regulations (50)'},
            {id: 5, label: 'Company (300)'},
            {id: 6, label: 'Legislation (200)'},
            {id: 7, label: 'Products (200)'},
            {id: 8, label: 'Income Statements (100)'},
            {id: 9, label: 'Factors (500)'},
            {id: 10, label: 'Income Statements (500)'},
            {id: 11, label: 'Research Topics (500)'},
            {id: 12, label: 'Countries (400)'},
            {id: 13, label: 'Sub Sectors (350)'},
            {id: 14, label: 'Topics (3300)', color: {background: "#000"}, fontColor: "#ffffff"}
        ];

        // create an array with edges
        var edges = [
            {from: 14, to: 1},
            {from: 14, to: 2},
            {from: 14, to: 3},
            {from: 14, to: 4},
            {from: 14, to: 5},
            {from: 14, to: 6},
            {from: 14, to: 7},
            {from: 14, to: 8},
            {from: 14, to: 9},
            {from: 14, to: 10},
            {from: 14, to: 11},
            {from: 14, to: 12},
            {from: 14, to: 13}
        ];

        // create a graph
        var data = {
            nodes: nodes,
            edges: edges
        };

        return data;
    }
}(HAF, jQuery));
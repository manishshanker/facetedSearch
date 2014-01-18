(function () {
    "use strict";

    APP.service.SearchFiltering = APP.service.SearchFiltering.extend({
        fetch: function (context, callback) {
            callback = callback || function () {
            };
            callback.call(context, getMockData());
        },
        getChild: function (id, callback) {
            setTimeout(function() {
                callback(getChildMock(parseInt(id)));
            }, 1000);
        }
    });

    function getChildMock(id) {
        return {
            title: "Regions",
            count: 400,
            id: id,
            related: [
                {id: 15, title: "Regions 1", count: 100},
                {id: 21, title: "Regions 2", count: 200},
                {id: 31, title: "Regions 3", count: 400},
                {id: 41, title: "Regions 4", count: 50},
                {id: 51, title: "Regions 5", count: 300},
                {id: 61, title: "Regions 6", count: 200},
                {id: 71, title: "Regions 7", count: 200},
                {id: 81, title: "Regions 8", count: 100},
                {id: 91, title: "Regions 9", count: 500},
                {id: 110, title: "Regions 10", count: 500},
                {id: 111, title: "Regions 11", count: 500},
                {id: 112, title: "Regions 12", count: 400},
                {id: 113, title: "Regions 13", count: 350}
            ]
        };
    }

    function getMockData() {
        return {
            title: "Topics",
            count: 400,
            id: 14,
            related: [
                {id: 1, title: "Regions", count: 100},
                {id: 2, title: "Balance Sheet", count: 200},
                {id: 3, title: "Activity", count: 400},
                {id: 4, title: "Regulations", count: 50},
                {id: 5, title: "Company", count: 300},
                {id: 6, title: "Legislation", count: 200},
                {id: 7, title: "Products", count: 200},
                {id: 8, title: "Income Statements", count: 100},
                {id: 9, title: "Factors", count: 500},
                {id: 10, title: "Income Statements", count: 500},
                {id: 11, title: "Research Topics", count: 500},
                {id: 12, title: "Countries", count: 400},
                {id: 13, title: "Sub Sectors", count: 350}
            ]
        };
    }
}());
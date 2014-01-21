(function () {
    "use strict";

    APP.service.SearchFiltering = APP.service.SearchFiltering.extend({
        fetch: function (context, callback) {
            callback = callback || function () {
            };
            callback.call(context, getMockData());
        },
        getChild: function (id, callback) {
            setTimeout(function () {
                callback(getChildMock(parseInt(id)));
            }, 1000);
        }
    });

    function getChildMock(id) {
        return {
            title: "Lorem Parent",
            count: 400,
            id: id,
            related: (function () {
                var data = [];
                for (var n = 1; n < ((Math.floor(Math.random() * 6)) + 8); n++) {
                    data.push({
                        id: id + n,
                        title: "Lorem " + id + n,
                        count: [100, 200, 400, 50][Math.floor(Math.random() * 4)]
                    })
                }
                return data;
            })()
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
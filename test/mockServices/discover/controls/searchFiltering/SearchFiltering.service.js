(function () {
    "use strict";

    APP.service.SearchFiltering = APP.service.SearchFiltering.extend({
        fetch: function (context, callback) {
            callback = callback || HAF.noop;
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
            title: "Lorem Parent " + id,
            count: Math.floor(Math.random() * 500),
            id: id,
            relations: [
                {
                    type: "related to",
                    id: "11",
                    items: (function () {
                        var data = [];
                        for (var n = 1; n < ((Math.floor(Math.random() * 6)) + 8); n++) {
                            data.push({
                                id: id + n,
                                title: "Lorem " + id + n,
                                count: [100, 200, 400, 50][Math.floor(Math.random() * 4)]
                            });
                        }
                        return data;
                    })()
                },
                {
                    type: "broader term",
                    id: "99",
                    items: (function () {
                        var data = [];
                        for (var n = 1; n < ((Math.floor(Math.random() * 6)) + 8); n++) {
                            data.push({
                                id: (id*2) + n,
                                title: "Lorem " + id + n,
                                count: [100, 200, 400, 50][Math.floor(Math.random() * 4)]
                            });
                        }
                        return data;
                    })()
                }
            ]
        };
    }

    function getMockData() {
        return {
            title: "Topics",
            count: 400,
            id: 14,
            relations: [
                {
                    type: "related to",
                    id: "12222",
                    items: [
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
                },
                {
                    type: "have common",
                    id: "1111",
                    items: (function () {
                        var data = [];
                        for (var n = 1; n < (2 + Math.floor(Math.random() * 15)); n++) {
                            data.push({
                                id: 100 + n,
                                title: "Lorem",
                                count: Math.floor(Math.random() * 600)
                            });
                        }
                        return data;
                    }())
                },
                {
                    type: "close to",
                    id: "222",
                    items: (function () {
                        var data = [];
                        for (var n = 1; n < (2 + Math.floor(Math.random() * 5)); n++) {
                            data.push({
                                id: 200 + n,
                                title: "Lorem",
                                count: Math.floor(Math.random() * 600)
                            });
                        }
                        return data;
                    }())
                }
            ]
        };
    }
}());
(function () {
    "use strict";

    ICEX.service.SearchFiltering = ICEX.service.SearchFiltering.extend({
        fetch: function (context, id, callback) {
            callback = callback || Mettle.noop;
            callback.call(context, getMockData(id));
        },
        getChild: function (id, callback) {
            setTimeout(function () {
                callback(getChildMock(parseInt(id)));
            }, 1000);
        }
    });

    function getChildMock(parentId) {
        var id = parentId;
        return {
            title: "Lorem",
            count: Math.floor(Math.random() * 500),
            id: parentId,
            relations: [
                {
                    type: "related to",
                    id: 400 + id,
                    items: (function () {
                        var data = [];
                        for (var n = 1; n < ((Math.floor(Math.random() * 6)) + 8); n++) {
                            data.push({
                                id: (500 + id) + n,
                                title: "Lorem",
                                count: [100, 200, 400, 50][Math.floor(Math.random() * 4)]
                            });
                        }
                        return data;
                    })()
                },
                {
                    type: "broader term",
                    id: 600 + id,
                    items: (function () {
                        var data = [];
                        for (var n = 1; n < ((Math.floor(Math.random() * 6)) + 4); n++) {
                            data.push({
                                id: (700 + id) + n,
                                title: "Lorem",
                                count: [100, 200, 400, 50][Math.floor(Math.random() * 4)]
                            });
                        }
                        return data;
                    })()
                }
            ]
        };
    }

    function getMockData(id) {
        return {
            title: "Topics:"+id,
            count: 400,
            id: 1,
            relations: [
                {
                    type: "related to",
                    id: 12,
                    items: [
                        {id: 121, title: "Regions", count: 100},
                        {id: 123, title: "Balance Sheet", count: 200},
                        {id: 124, title: "Activity", count: 400},
                        {id: 125, title: "Regulations", count: 50},
                        {id: 126, title: "Company", count: 300},
                        {id: 128, title: "Legislation", count: 200},
                        {id: 129, title: "Products", count: 200},
                        {id: 130, title: "Income Statements", count: 100},
                        {id: 131, title: "Factors", count: 500},
                        {id: 132, title: "Income Statements", count: 500},
                        {id: 133, title: "Research Topics", count: 500},
                        {id: 134, title: "Countries", count: 400},
                        {id: 135, title: "Sub Sectors", count: 350}
                    ]
                },
                {
                    type: "have common",
                    id: 15,
                    items: (function () {
                        var data = [];
                        for (var n = 1; n < (2 + Math.floor(Math.random() * 15)); n++) {
                            data.push({
                                id: 150 + n,
                                title: "Lorem",
                                count: Math.floor(Math.random() * 600)
                            });
                        }
                        return data;
                    }())
                },
                {
                    type: "close to",
                    id: 180,
                    items: (function () {
                        var data = [];
                        for (var n = 1; n < (2 + Math.floor(Math.random() * 5)); n++) {
                            data.push({
                                id: 180 + n,
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
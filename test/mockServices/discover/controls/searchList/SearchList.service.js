(function (APP) {
    "use strict";

    APP.service.SearchList = APP.service.SearchList.extend({
        cachedResultData: null,
        fetch: function (context, ids, callback) {
            callback = callback || this.updated;
            this.cachedResultData = this.cachedResultData || mockData;
            var data = this.getDataForId(ids);
            this.currentFilterInfo = {
                title: data.title,
                id: data.id
            };
            callback.call(context, data);
        }
    });

    var mockData = {
        title: "",
        id: "",
        subGroup: {
            id: "1",
            title: "Industry",
            items: [
                {
                    title: "Basic Materials",
                    id: "11",
                    subGroup: getMock("11")
                },
                {
                    title: "Business Services",
                    id: "12",
                    subGroup: getMock("12")
                },
                {
                    title: "Consumer Cyclicals",
                    id: "13",
                    subGroup: getMock("13")
                },
                {
                    title: "Consumer Non-Cyclicals",
                    id: "15",
                    subGroup: getMock("15")
                },
                {
                    title: "Financials",
                    id: "16",
                    subGroup: {
                        id: "161",
                        title: "Sectors",
                        items: [
                            {
                                title: "Banks",
                                id: "16_1",
                                subGroup: getMock("16_1"),
                                count: 100
                            },
                            {
                                title: "Capital Markets",
                                id: "16_2",
                                subGroup: getMock("16_2"),
                                count: 50
                            },
                            {
                                title: "Financial Services",
                                id: "16_3",
                                subGroup: getMock("16_3"),
                                count: 50
                            },
                            {
                                title: "Insurance",
                                id: "16_4",
                                subGroup: getMock("16_4"),
                                count: 50
                            },
                            {
                                title: "Real Estate",
                                id: "16_5",
                                subGroup: getMock("16_5"),
                                count: 100
                            }
                        ]
                    }
                }
            ]
        }
    };

    function getMock(id) {
        return {
            id: id + "_0",
            title: "Lorem",
            items: (function () {
                var d = [];
                for (var n = 0; n < 10; n++) {
                    d.push({
                        title: "Lorem Ipsum " + n,
                        id: id + "_" + (n + 1)
                    });
                }
                return d;
            }())
        };
    }

}(APP));
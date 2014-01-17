(function (HAF, $) {
    "use strict";

    APP.service.SearchList = APP.service.SearchList.extend({
        cachedResultData: {},
        fetch: function (context, id, callback) {
            callback = callback || this.updated;
            var data = getMockData(id);
            this.cachedResultData[data.id] = data;
            callback.call(context || this, data);
        }
    });

    function getMockData(id) {
        var mockData = {};
        if (!id) {
            mockData = {
                title: "Industry",
                id: "1",
                level: 0,
                items: [
                    {
                        title: "Basic Materials",
                        id: "11"
                    },
                    {
                        title: "Business Services",
                        id: "12"
                    },
                    {
                        title: "Consumer Cyclicals",
                        id: "13"
                    },
                    {
                        title: "Consumer Non-Cyclicals",
                        id: "15"
                    },
                    {
                        title: "Financials",
                        id: "16"
                    }
                ]
            };
        } else if (id == 16) {
            mockData = {
                title: "Sectors",
                id: "161",
                items: [
                    {
                        title: "Banks",
                        id: "16_1"
                    },
                    {
                        title: "Capital Markets",
                        id: "16_2"
                    },
                    {
                        title: "Financial Services",
                        id: "16_3"
                    },
                    {
                        title: "Insurance",
                        id: "16_4"
                    },
                    {
                        title: "Real Estate",
                        id: "16_5"
                    }
                ]
            };
        } else {
            mockData = {
                title: "Lorem ipsum",
                idd: "162",
                items: [
                    {
                        title: "Lorem ipsum 1",
                        id: id + "_1"
                    },
                    {
                        title: "Lorem ipsum 2",
                        id: id + "_2"
                    },
                    {
                        title: "Lorem ipsum 3",
                        id: id + "_3"
                    },
                    {
                        title: "Lorem ipsum 4",
                        id: id + "_5"
                    }
                ]
            };
        }
        return mockData;
    }
}(HAF, jQuery));
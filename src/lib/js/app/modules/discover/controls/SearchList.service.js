(function (HAF) {
    "use strict";

    APP.service.SearchList = HAF.Service.extend({
        fetch: function (context, id, callback) {
            callback = callback || this.updated;
            callback.call(context || this, getMockData(id));
        }
    });

    function getMockData(id) {
        var mockData;
        if (!id) {
            mockData = {
                title: "Industry",
                id: "1",
                children: [
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
        } else if (id) {
            mockData = {
                title: "Sectors",
                id: "161",
                children: [
                    {
                        title: "Banks",
                        id: "1611"
                    },
                    {
                        title: "Capital Markets",
                        id: "1612"
                    },
                    {
                        title: "Financial Services",
                        id: "1613"
                    },
                    {
                        title: "Insurance",
                        id: "1614"
                    }
                ]
            };
        }

        return mockData;
    }
}(HAF));
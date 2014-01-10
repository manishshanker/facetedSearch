(function (HAF, $) {
    "use strict";

    APP.service.SearchList = HAF.Service.extend({
        cachedResultData: {},
        fetch: function (context, id, callback) {
            callback = callback || this.updated;
            var data = getMockData(id);
            this.cachedResultData[data.id] = data;
            callback.call(context || this, data);
        },
        getMetaInfo: function (id) {
            return findItem(this.cachedResultData, id);
        }
    });

    function findItem(items, id) {
        var itemFound = null;
        $.each(items, function(key, item) {
            if (item.id == id) {
                itemFound = item;
                return false;
            } else {
                if (item.children) {
                    var tmpItemFound = findItem(item.children, id);
                    if (tmpItemFound) {
                        itemFound = tmpItemFound;
                        return false;
                    }
                }
            }
            return true;
        });
        return itemFound;
    }

    function getMockData(id) {
        var mockData = {};
        if (!id) {
            mockData = {
                title: "Industry",
                id: "1",
                level: 0,
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
        } else if (id==16) {
            mockData = {
                title: "Sectors",
                id: "161",
                level: 1,
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
        } else {
            mockData = {
                title: "Lorem ipsum",
                id: "16121",
                level: 2,
                children: [
                    {
                        title: "Banks",
                        id: "161211"
                    },
                    {
                        title: "Capital Markets",
                        id: "161212"
                    },
                    {
                        title: "Financial Services",
                        id: "161213"
                    },
                    {
                        title: "Insurance",
                        id: "161214"
                    }
                ]
            };
        }
        return mockData;
    }
}(HAF, jQuery));
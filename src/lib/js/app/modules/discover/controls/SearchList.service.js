(function (HAF) {
    "use strict";

    APP.service.SearchList = HAF.Service.extend({
        fetch: function (id) {
            var mockData = {
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
                    }
                ]
            };
            console.log("called this")
            this.updated(mockData);
        }
    });

}(HAF));
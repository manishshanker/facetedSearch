(function (HAF) {
    "use strict";

    APP.service.SearchResults = HAF.Service.extend({
        fetch: function(callback) {
            setTimeout(function() {
                callback(getMockData());
            }, 1);
        }
    });

    function getMockData() {
        return {
            "results": [
                {
                    "title": "Santander: Lowing expectations for 2012 and the UK",
                    "subTitle": "Morgan Stanley Research Europe",
                    "updateDate": "3 October 2011",
                    "contributor": "Alvaro Serrano",
                    "description": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
                    "tags": [
                        {
                            name: "Revenue"
                        },
                        {
                            name: "Spain"
                        },
                        {
                            name: "Portugal"
                        },
                        {
                            name: "Banco Santander S.A. ADS"
                        }
                    ]
                },
                {
                    "title": "Santander: Lowing expectations for 2012 and the UK",
                    "subTitle": "Morgan Stanley Research Europe",
                    "updateDate": "3 October 2011",
                    "contributor": "Alvaro Serrano",
                    "description": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
                    "tags": [
                        {
                            name: "Revenue"
                        },
                        {
                            name: "Spain"
                        },
                        {
                            name: "Portugal"
                        },
                        {
                            name: "Banco Santander S.A. ADS"
                        }
                    ]
                },
                {
                    "title": "Santander: Lowing expectations for 2012 and the UK",
                    "subTitle": "Morgan Stanley Research Europe",
                    "updateDate": "3 October 2011",
                    "contributor": "Alvaro Serrano",
                    "description": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
                    "tags": [
                        {
                            name: "Revenue"
                        },
                        {
                            name: "Spain"
                        },
                        {
                            name: "Portugal"
                        },
                        {
                            name: "Banco Santander S.A. ADS"
                        }
                    ]
                },
                {
                    "title": "Santander: Lowing expectations for 2012 and the UK",
                    "subTitle": "Morgan Stanley Research Europe",
                    "updateDate": "3 October 2011",
                    "contributor": "Alvaro Serrano",
                    "description": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
                    "tags": [
                        {
                            name: "Revenue"
                        },
                        {
                            name: "Spain"
                        },
                        {
                            name: "Portugal"
                        },
                        {
                            name: "Banco Santander S.A. ADS"
                        }
                    ]
                }
            ]
        };
    }

}(HAF));
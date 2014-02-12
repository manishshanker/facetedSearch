(function () {
    "use strict";

    ICEX.service.SearchResults = ICEX.service.SearchResults.extend({
        fetch: function (id, callback) {
            setTimeout(function () {
                callback(getMockData(id));
            }, 1);
        }
    });

    function getMockData(id) {
        return {
            "results": (function(){
                var a = [];
                for (var n=0; n<15; n++) {
                    a.push({
                        "title": "Santander: Lowing expectations for 2012 and the UK",
                        "subTitle": "Morgan Stanley Research Europe  | For ID:" + id,
                        "updateDate": "3 October 2011",
                        "contributor": "Alvaro Serrano",
                        "description": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
                        "tags": {
                            primary: [
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
                            ],
                            secondary: (function() {
                                var d = [];
                                for (var i=0; i<30; i++) {
                                    d.push({ name: "Lorem" + i});
                                }
                                return d;
                            }())
                        }
                    });
                }
                return a;
            }())
        };
    }

}());
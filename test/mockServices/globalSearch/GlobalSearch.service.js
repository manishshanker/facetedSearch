(function ($) {
    "use strict";

    ICEX.service.GlobalSearch = ICEX.service.GlobalSearch.extend({
        fetch: function (requestData, callback) {
            callback(mockData(this, requestData.term));
        }
    });

    function mockData(ctx, term) {
        return $.grep(ctx.transformData(data), function (item) {
            return item.value.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    var data = {
        "parameters":{
            "tbdb":"ipsv",
            "service":"prefix",
            "template":"service.json",
            "term_prefix":"beach"
        },
        "termHints":[
            {
                "name":"Beaches",
                "id":"OMITERMO2707",
                "index":"ipsv",
                "values":[
                    {
                        "value":"Beaches",
                        "pre_em":"",
                        "em":"Beach",
                        "post_em":"es",
                        "nature":"PT",
                        "id":"OMITERMO2707"
                    }
                ],
                "facets":[
                    {"id":"OMITERMO499","name":"Environment"}
                ]},
            {
                "name":"Coastal erosion and protection",
                "id":"OMITERMO806",
                "index":"ipsv",
                "values":[
                    {
                        "value":"beaches conservation",
                        "pre_em":"",
                        "em":"beach",
                        "post_em":"es conservation",
                        "nature":"NPT",
                        "id":"OMITERMO9496"
                    },
                    {
                        "value":"beaches erosion",
                        "pre_em":"",
                        "em":"beach",
                        "post_em":"es erosion",
                        "nature":"NPT",
                        "id":"OMITERMO9495"
                    },
                    {
                        "value":"beaches groynes",
                        "pre_em":"",
                        "em":"beach",
                        "post_em":"es groynes",
                        "nature":"NPT",
                        "id":"OMITERMO9497"
                    }
                ],
                "facets":[
                    {"id":"OMITERMO499","name":"Environment"}
                ]},
            {
                "name":"Water pollution",
                "id":"OMITERMO5",
                "index":"ipsv",
                "values":[
                    {
                        "value":"Beach water pollution",
                        "pre_em":"",
                        "em":"Beach",
                        "post_em":" water pollution",
                        "nature":"NPT",
                        "id":"OMITERMO2471"
                    }
                ],
                "facets":[
                    {"id":"OMITERMO499","name":"Environment"}
                ]}
        ],"total":3
    };

    var xdata = {
        "parameters":{
            "tbdb":"disp_taxonomy",
            "service":"prefix",
            "template":"service.json",
            "term_prefix":"b"
        },
        "termHints":[
            {
                "name":"ALLIED IRISH BANKS PLC",
                "id":"65006048245996726735380",
                "index":"disp_taxonomy",
                "values":[
                    {
                        "value":"ALLIED IRISH BANKS PLC",
                        "pre_em":"ALLIED IRISH ",
                        "em":"B",
                        "post_em":"ANKS PLC",
                        "nature":"PT",
                        "id":"65006048245996726735380"
                    }
                ],
                "facets":[
                    {"id":"135440299621399326318902","name":"Companies"}
                ]},
            {
                "name":"Asset Management, Wealth Management / Private Banking",
                "id":"180198901423236459319896",
                "index":"disp_taxonomy",
                "values":[
                    {
                        "value":"Asset Management, Wealth Management / Private Banking",
                        "pre_em":"Asset Management, Wealth Management / Private ",
                        "em":"B",
                        "post_em":"anking",
                        "nature":"PT",
                        "id":"180198901423236459319896"
                    }
                ],
                "facets":[
                    {"id":"20490909765438762462549","name":"Activity"}
                ]},
            {
                "name":"Austrian National Bank",
                "id":"160873442536483862719105",
                "index":"disp_taxonomy",
                "values":[
                    {
                        "value":"Austrian National Bank",
                        "pre_em":"Austrian National ",
                        "em":"B",
                        "post_em":"ank",
                        "nature":"PT",
                        "id":"160873442536483862719105"
                    }
                ],
                "facets":[
                    {"id":"65531537692687248608340","name":"Regulator"}
                ]},
            {
                "name":"BANAMEX",
                "id":"76675717556852148843023",
                "index":"disp_taxonomy",
                "values":[
                    {
                        "value":"BANAMEX",
                        "pre_em":"",
                        "em":"B",
                        "post_em":"ANAMEX",
                        "nature":"PT",
                        "id":"76675717556852148843023"
                    }
                ],
                "facets":[
                    {"id":"135440299621399326318902","name":"Companies"}
                ]},
            {
                "name":"BANCA INTESA SPA",
                "id":"57023155323150091729281",
                "index":"disp_taxonomy",
                "values":[
                    {
                        "value":"BANCA INTESA SPA",
                        "pre_em":"",
                        "em":"B",
                        "post_em":"ANCA INTESA SPA",
                        "nature":"PT",
                        "id":"57023155323150091729281"
                    }
                ],
                "facets":[
                    {"id":"135440299621399326318902","name":"Companies"}
                ]},
            {
                "name":"BANCA MONTE DEI PASCHI DI SIENA SPA",
                "id":"2466527042763028760575",
                "index":"disp_taxonomy",
                "values":[
                    {
                        "value":"BANCA MONTE DEI PASCHI DI SIENA SPA",
                        "pre_em":"",
                        "em":"B",
                        "post_em":"ANCA MONTE DEI PASCHI DI SIENA SPA",
                        "nature":"PT",
                        "id":"2466527042763028760575"
                    }
                ],
                "facets":[
                    {"id":"135440299621399326318902","name":"Companies"}
                ]},
            {
                "name":"BANCO BILBAO VIZCAYA ARGENTARIA SA",
                "id":"156697982176554062728377",
                "index":"disp_taxonomy",
                "values":[
                    {
                        "value":"BANCO BILBAO VIZCAYA ARGENTARIA SA",
                        "pre_em":"",
                        "em":"B",
                        "post_em":"ANCO BILBAO VIZCAYA ARGENTARIA SA",
                        "nature":"PT",
                        "id":"156697982176554062728377"
                    }
                ],
                "facets":[
                    {"id":"135440299621399326318902","name":"Companies"}
                ]},
            {
                "name":"BANCO POPULAR ESPANOL",
                "id":"152364805566535344942814",
                "index":"disp_taxonomy",
                "values":[
                    {
                        "value":"BANCO POPULAR ESPANOL",
                        "pre_em":"",
                        "em":"B",
                        "post_em":"ANCO POPULAR ESPANOL",
                        "nature":"PT",
                        "id":"152364805566535344942814"
                    }
                ],
                "facets":[
                    {"id":"135440299621399326318902","name":"Companies"}
                ]},
            {
                "name":"BANCO SABADELL",
                "id":"52110128373249342562447",
                "index":"disp_taxonomy",
                "values":[
                    {
                        "value":"BANCO SABADELL",
                        "pre_em":"",
                        "em":"B",
                        "post_em":"ANCO SABADELL",
                        "nature":"PT",
                        "id":"52110128373249342562447"
                    }
                ],
                "facets":[
                    {"id":"135440299621399326318902","name":"Companies"}
                ]},
            {
                "name":"BANCO SANTANDER",
                "id":"108004675838714880222874",
                "index":"disp_taxonomy",
                "values":[
                    {
                        "value":"BANCO SANTANDER",
                        "pre_em":"",
                        "em":"B",
                        "post_em":"ANCO SANTANDER",
                        "nature":"PT",
                        "id":"108004675838714880222874"
                    }
                ],
                "facets":[
                    {"id":"135440299621399326318902","name":"Companies"}
                ]}
        ],"total":10
    };


}(jQuery));
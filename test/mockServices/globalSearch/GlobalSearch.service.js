(function ($) {
    "use strict";

    APP.service.GlobalSearch = APP.service.GlobalSearch.extend({
        fetch: function (requestData, callback) {
            callback(mockData(requestData.term));
        }
    });

    function mockData(term) {
        return $.grep([
            {
                value: "jquery the write less, do more, javascript library",
                label: "jQuery",
                desc: "the write less, do more, JavaScript library"
            },
            {
                value: "jquery-ui the official user interface library for jquery",
                label: "jQuery UI",
                desc: "the official user interface library for jQuery"
            },
            {
                value: "sizzlejs a pure javascript css selector engine",
                label: "Sizzle JS",
                desc: "a pure-JavaScript CSS selector engine"
            }
        ], function (item) {
            return item.value.indexOf(term) > -1;
        });
    }

}(jQuery));
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
                value: "document abc finance real state",
                label: "Document ABC",
                desc: "in Finance, Real State"
            },
            {
                value: "document 123 finance",
                label: "Document 123",
                desc: "in Finance"
            },
            {
                value: "document xyz real state",
                label: "Document XYZ",
                desc: "in Real State"
            }
        ], function (item) {
            return item.value.indexOf(term) > -1;
        });
    }

}(jQuery));
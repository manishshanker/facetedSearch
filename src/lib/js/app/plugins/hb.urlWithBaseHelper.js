(function () {
    "use strict";

    Handlebars.registerHelper('urlWithBase', function (urlText) {
        return "#/" + urlText;
    });
}());
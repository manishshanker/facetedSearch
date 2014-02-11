(function () {
    "use strict";

    var template = Handlebars.compile("<span class='highlight-search'>{{term}}</span>");

    Handlebars.registerHelper('highlight', function (label, term) {
        var re = new RegExp(term, "i");
        return new Handlebars.SafeString(label.replace(re, function (match) {
            return template({term: match});
        }));
    });
}());
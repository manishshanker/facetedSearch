(function (Mettle) {
    "use strict";

    ICEX.service.GlobalSearch = Mettle.Service.extend({
        fetch: function(request, callback) {
            //TODO: AJAX request
        },
        transformData: function (data, term) {
            var d = [];
            Mettle.each(data.termHints, function (termHint) {
                var termHintValue = termHint.values[termHint.values.length - 1];
                d[d.length] = {
                    term: term,
                    value: termHintValue.value + " " + termHint.name,
                    label: termHint.name,
                    id: termHint.id,
                    subCategory: termHintValue.nature === "PT" ? undefined : termHintValue.value,
                    facets: termHint.facets
                };
            });
            return d;
        }
    });

}(Mettle));
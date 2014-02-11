(function (Mettle) {
    "use strict";

    ICEX.service.GlobalSearch = Mettle.Service.extend({
        fetch: function(request, callback) {
            //TODO: AJAX request
        },
        transformData: function (data) {
            var d = [];
            Mettle.each(data.termHints, function (termHint) {
                var termHintValue = termHint.values[termHint.values.length - 1];
                d[d.length] = {
                    term: data.parameters.term_prefix,
                    value: termHintValue.value + " " + termHint.name,
                    label: termHint.name,
                    id: termHint.id,
                    subCategory: termHintValue.nature === "PT" ? undefined : termHintValue.value,
//                    pre_em: termHintValue.pre_em,
//                    em: termHintValue.em,
//                    post_em: termHintValue.post_em,
                    facets: termHint.facets
                };
            });
            return d;
        }
    });

}(Mettle));
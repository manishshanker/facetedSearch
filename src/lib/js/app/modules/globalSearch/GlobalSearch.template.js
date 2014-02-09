(function (Mettle) {
    "use strict";

    Mettle.each({
        globalSearchHighlight: "<span class='highlight-search'>{{term}}</span>",
        globalSearchItem: "<li><a>{{label}}<br/><span class='description'>{{desc}}</span></a></li>"
    }, function(template, key) {
        ICEX.template[key] = Mettle.TemplateByString(template);
    });

}(Mettle));
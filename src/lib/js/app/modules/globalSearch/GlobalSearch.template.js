(function (HAF) {
    "use strict";

    HAF.each({
        globalSearchHighlight: "<span class='highlight-search'>{{term}}</span>",
        globalSearchItem: "<li><a>{{label}}<br/><span class='description'>{{desc}}</span></a></li>"
    }, function(template, key) {
        ICEX.template[key] = HAF.TemplateByString(template);
    });

}(HAF));
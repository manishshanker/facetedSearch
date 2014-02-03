(function (HAF) {
    "use strict";

    HAF.each({
        globalSearchHighlight: "<span class='highlight-search'>{{term}}</span>",
        globalSearchItem: "<li><a>{{label}}<br/>{{desc}}</a></li>"
    }, function(template, key) {
        APP.template[key] = HAF.TemplateByString(template);
    });

}(HAF));
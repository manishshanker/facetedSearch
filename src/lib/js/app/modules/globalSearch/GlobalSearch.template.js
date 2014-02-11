(function (Mettle) {
    "use strict";

    Mettle.each({
        globalSearchItem: "<li><a>{{highlight label term}}{{#if subCategory}} (<span class='sub-category'>{{highlight subCategory term}}</span>){{/if}} {{#each facets}}<span class='facet'>{{name}}</span>{{/each}}</a></li>"
    }, function(template, key) {
        ICEX.template[key] = Mettle.TemplateByString(template);
    });

}(Mettle));
(function (Mettle) {
    "use strict";

    var cachedSearchResponse = {};

    ICEX.controller.GlobalSearch = Mettle.Controller.extend({
        inject: function () {
            return {
                views: ["globalSearch"],
                services: ["globalSearch"],
                templates: ["globalSearchItem", "globalSearchHighlight"]
            };
        },
        load: function () {
            var that = this;
            that.templates.globalSearchItem.load(function () {
                that.templates.globalSearchHighlight.load(function () {
                    that.views.globalSearch.render(getDataSource(that), getTemplateProvider(that), onSelect);
                });
            });
        }
    });

    function onSelect(item) {
        //TODO: implement
        console.log(item);
    }

    function getDataSource(ctx) {
        return function (request, response) {
            request.term = request.term.toLowerCase();
            var term = request.term;
            if (term in cachedSearchResponse) {
                response(cachedSearchResponse[ term ]);
                return;
            }
            ctx.services.globalSearch.fetch(request, function (data) {
                cachedSearchResponse[term] = data;
                response(data);
            });
        };
    }

    function markSearchedText(ctx, label, term) {
        var re = new RegExp(term, "i");
        return label.replace(re, function (match) {
            return ctx.templates.globalSearchHighlight.process({term: match});
        });
    }

    function getTemplateProvider(ctx) {
        return function templateProvider(term, item) {
            var label = markSearchedText(ctx, item.label, term);
            var desc = markSearchedText(ctx, item.desc, term);
            return ctx.templates.globalSearchItem.process({
                label: Mettle.TemplateSafeString(label),
                desc: Mettle.TemplateSafeString(desc)
            });
        };
    }


}(Mettle));
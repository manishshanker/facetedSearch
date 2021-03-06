(function (Mettle) {
    "use strict";

    var cachedSearchResponse = {};

    ICEX.controller.GlobalSearch = Mettle.Controller.extend({
        inject: function () {
            return {
                views: ["globalSearch"],
                services: ["globalSearch"],
                templates: ["globalSearchItem"]
            };
        },
        load: function () {
            var that = this;
            that.templates.globalSearchItem.load(function () {
                that.views.globalSearch.render(getDataSource(that), getTemplateProvider(that), onSelect);
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

    function getTemplateProvider(ctx) {
        return function templateProvider(term, item) {
            return ctx.templates.globalSearchItem.process(item);
        };
    }


}(Mettle));
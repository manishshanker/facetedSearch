describe("DiscoverPage.controller", function () {
    "use strict";

    var $fragments;

    beforeEach(function () {
        Mettle.init(ICEX, ICEX.i18nT);
        $fragments = $("<div id='fragments'></div>");
        $fragments.html("<div id='tmplSearchList'>{{title}}</div><div id='tmplSearchResults'>{{title}}</div><div id='tmplBreadcrumbItem'>{{title}}</div><div id='tmplListFiltering'>{{title}}</div>");
        $("body").append($fragments);
    });

    afterEach(function () {
        $fragments.remove();
    });

    describe(".init", function () {
        it("should initialise without error", function () {
            var controller = new ICEX.controller.DiscoverPage();
            controller.load();
        });
    });

    describe(".load", function () {
        it("should subscribe to messages", function () {
            var messageBus = new Mettle.Messaging();
            spyOn(messageBus, "subscribe");
            var controller = new ICEX.controller.DiscoverPage({
                inject: {
                    localMessageBus: messageBus
                }
            });
            controller.load();
            expect(messageBus.subscribe).toHaveBeenCalledWith(jasmine.any(Object), {
                "searchList-show": jasmine.any(Function),
                "searchFiltering-itemSelected": jasmine.any(Function),
                "searchFiltering-changed": jasmine.any(Function),
                "searchList-hide": jasmine.any(Function)
            });
        });
    });

});
describe("DiscoverPage.controller", function () {
    "use strict";

    var $fragments;

    beforeEach(function () {
        $fragments = $("<div id='fragments'></div>");
        $fragments.html("<div id='searchListTemplate'>{{title}}</div><div id='searchResultTemplate'>{{title}}</div><div id='breadcrumbItemTemplate'>{{title}}</div><div id='filteringListTemplate'>{{title}}</div>");
        $("body").append($fragments);
    });

    afterEach(function () {
        $fragments.remove();
    });

    describe(".init", function () {
        it("should initialise without error", function () {
            var messageBus = new HAF.Messaging();
            spyOn(messageBus, "subscribe");
            var controller = new APP.controller.DiscoverPage({
                inject: {
                    messageBus: messageBus
                }
            });
            controller.load();
            expect(messageBus.subscribe).toHaveBeenCalledWith(jasmine.any(Object), "search-list-hide", jasmine.any(Function));
            expect(messageBus.subscribe).toHaveBeenCalledWith(jasmine.any(Object), "search-list-show", jasmine.any(Function));
            expect(messageBus.subscribe).toHaveBeenCalledWith(jasmine.any(Object), "search-filtering-changed", jasmine.any(Function));
        });
    });

});
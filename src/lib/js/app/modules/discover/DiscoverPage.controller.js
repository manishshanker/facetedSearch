(function (HAF) {
    "use strict";

    APP.controller.DiscoverPage = HAF.Controller.extend({
        getControls: function () {
            return {
                searchList: new APP.controller.SearchList()
            };
        },
        getServices: function () {
            return {
                searchList: new APP.service.SearchList()
            };
        },
        controlMessages: {
            show: "navigationChangedTo:discover",
            hide: "navigationChangedFrom:discover",
            stateChange: "navigationStateChange:discover"
        }
    });

}(HAF));
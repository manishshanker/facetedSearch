(function (HAF) {
    "use strict";

    APP.controller.ListFiltering = HAF.Controller.extend({
        autoWire: true,
        inject: function () {
            return {
                views: {
                    listFiltering: new APP.view.ListFiltering(this.messageBus)
                },
                templates: {
                    listFiltering: new HAF.Template("filteringListTemplate")
                }
            };
        }
    });

}(HAF));
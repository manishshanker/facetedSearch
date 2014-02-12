(function (Mettle) {
    "use strict";

    ICEX.controller.VisualFiltering = Mettle.Controller.extend({
        autoLayout: true,
        injectLocalMessageBus: true,
        inject: {
            views: [{visualFiltering: "visualFiltering"}],
            services: [{visualFiltering: "visualFiltering"}]
        },
        processData: Mettle.noop,
        load: function() {
            var that = this;
            that.localMessageBus.subscribe("visualFiltering-changed", function (data) {
                that.views.visualFiltering.setStateLoading();
                that.messageBus.publish("searchFiltering-changed", that.services.visualFiltering.parseId(data.nodeId));
                that.processData = function(newData) {
                    data.callback(newData);
                };
            });
        },
        update: function (data, reRender) {
            var that = this;
            data = that.services.visualFiltering.transformData(data, this.views.visualFiltering.getStyle());
            if (!that.loaded || reRender) {
                this.views.visualFiltering.render(data);
                that.loaded = true;
            } else {
                that.processData(data);
            }
        }
    });

}(Mettle));
(function (Mettle) {
    "use strict";

    ICEX.controller.Authentication = Mettle.Controller.extend({
        isAuthenticated: false,
        load: function() {
            var that = this;
            Mettle.messaging.subscribe("authenticator-authenticated", function(data) {
                if (!that.isAuthenticated) {
                    alert("TODO: Authentication!");
                    that.isAuthenticated = true;
                    data.successCallback();
                } else {
                    data.successCallback();
                }
            });
        }
    });

}(Mettle));
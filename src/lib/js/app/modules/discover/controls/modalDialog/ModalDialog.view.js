(function (Mettle) {
    "use strict";

    ICEX.view.ModalDialog = Mettle.View.extend({
        container: "#appModalDialog",
        init: function() {
            this._super();
            this.$el.dialog({
                dialogClass: "modal-dialog",
                modal: true,
                autoOpen: false,
                draggable: false,
                resizable: false,
                width: "970px",
                minHeight: "200px",
                hide: { effect: "fade", duration: 200 },
                show: { effect: "fade", duration: 200 }
            });
        },
        show: function() {
            this.$el.dialog("open");
        },
        hide: function() {
            var that = this;
            that.$el.dialog("close");
        }
    });

}(Mettle));
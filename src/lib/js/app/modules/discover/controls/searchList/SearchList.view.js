(function (Mettle) {
    "use strict";

    ICEX.view.SearchList = Mettle.View.extend({
        container: "#appSearchList",
        bindings: {
            "click .hide-list": function (e) {
                onSearchListHide(e, this);
            }
        },
        render: function (direction, html) {
            addAndShowList(this, direction, html);
        },
        removeList: function (direction, onRemove) {
            var that = this;
            hideAndRemoveList(that, direction, onRemove);
        },
        hideHideListLink: function(hide) {
            this.$el.find(".hide-list")[hide ? "hide" : "show"]();
        }
    });

    function addAndShowList(ctx, direction, html) {
        ctx.$el.append(html);
        var $element = ctx.$el.find(".item").eq(0);
        if (direction === 1) {
            $element.removeClass("hide").addClass("show");
        } else {
            window.setTimeout(function () {
                $element.removeClass("hide").addClass("show");
            }, 10);
        }
    }

    function onSearchListHide(e, ctx) {
        ctx.messageBus.publish("search-list-hide");
        e.preventDefault();
    }

    function hideAndRemoveList(ctx, direction, onRemove) {
        var $element = ctx.$el.find(".item");
        $element.removeClass("show").addClass(direction === -1 ? "hide" : "hide-back");
        setTimeout(function () {
            $element.remove();
            onRemove();
        }, 500);
    }

}(Mettle));
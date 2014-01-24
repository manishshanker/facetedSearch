(function (HAF) {
    "use strict";

    APP.view.SearchList = HAF.View.extend({
        container: "#appSearchList",
        autoManageEventBind: true,
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
        show: function () {
            this.$el.removeClass("hide");
        },
        hide: function () {
            this.$el.addClass("hide");
        }
    });

    function addAndShowList(ctx, direction, html) {
        ctx.$el.append(html);
        if (direction === 1) {
            ctx.$el.find(".item").eq(0).removeClass("hide").addClass("show");
        } else {
            window.setTimeout(function () {
                ctx.$el.find(".item").eq(0).removeClass("hide").addClass("show");
            }, 10);
        }
    }

    function onSearchListHide(e, ctx) {
        ctx.parentMessageBus.publish("search-list-hide");
        e.preventDefault();
    }

    function hideAndRemoveList(ctx, direction, onRemove) {
        ctx.$el.find(".item").removeClass("show").addClass(direction === -1 ? "hide" : "hide-back");
        setTimeout(function () {
            ctx.$el.find(".item").remove();
            onRemove();
        }, 500);
    }

}(HAF));
(function (HAF) {
    "use strict";

    APP.view.SearchList = HAF.View.extend({
        level: -1,
        container: "#appSearchList",
        bindings: {
            "click .hide-list": function(e) {
                onSearchListHide(e, this);
            }
        },
        render: function (html) {
            var that = this;
            setTimeout(function () {
                hideItemInLevel(that, that.level);
                that.$el.append(html);
                that.level++;
            }, 10);
            setTimeout(function () {
                showItemInLevel(that, that.level);
            }, 50);
        },
        removeList: function (id, level) {
            var that = this;
            that.currentFilterId = id;
            hideItemInLevel(that, level + 1);
            showItemInLevel(that, level);
            setTimeout(function () {
                that.$el.find(".item").eq(level + 1).remove();
            }, 500);
        },
        show: function () {
            this.$el.removeClass("hide");
        },
        hide: function () {
            this.$el.addClass("hide");
        }
    });

    function onSearchListHide(e, ctx) {
        ctx.messageBus.publish("search-list-hide");
        e.preventDefault();
    }

    function showItemInLevel(context, level) {
        context.$el.find(".item").eq(level).removeClass("hide").addClass("show");
    }

    function hideItemInLevel(context, level) {
        context.$el.find(".item").eq(level).removeClass("show").addClass("hide");
    }

}(HAF));
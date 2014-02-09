(function (Mettle) {
    "use strict";

    ICEX.view.Breadcrumb = Mettle.View.extend({
        level: 0,
        container: "#appBreadcrumb",
        render: function (html) {
            var $ul = this.$el.find("ul");
            $ul.append(html);
            this.$el.addClass("show");
            $ul.find("li:not(.show)").addClass("show");
            $ul.find("li:last").removeClass("show");
            setTimeout(function () {
                $ul.find("li:last").addClass("show");
            }, 10);
        },
        bindings: {
            "click .show-list": function (e) {
                onSearchListShow(e, this);
            }
        },
        hide: function () {
            var that = this;
            that.$el.find(".breadcrumb").removeClass("show").addClass("hide");
            that.$el.find("ul").find("li").removeClass("show").addClass("hide");
            setTimeout(function () {
                that.$el.find("ul li").remove();
            }, 500);
        },
        remove: function () {
            this.$el.find("li").remove();
        },
        showTopic: function () {
            this.$el.find(".show-list").show();
        },
        hideTopic: function () {
            this.$el.find(".show-list").hide();
        }
    });

    function onSearchListShow(e, ctx) {
        ctx.messageBus.publish("search-list-show");
        e.preventDefault();
    }
}(Mettle));
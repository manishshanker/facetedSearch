(function (HAF, $) {
    "use strict";

    APP.view.Breadcrumb = HAF.View.extend({
        level: 0,
        container: "#appBreadcrumb",
        messageBus: null,
        init: function(messageBus) {
            this._super();
            this.messageBus = messageBus;
        },
        render: function(html) {
            var $ul = this.$el.find("ul");
            $ul.append(html);
            this.$el.addClass("show");

            //TODO: not nice, need to move out
            $("#discover").find(".content").addClass("next-level");

            setTimeout(function() {
                $ul.find("li:not(.show)").addClass("show");
            }, 10);
            bindEvents(this);
        },
        hide: function() {
            var that = this;
            that.$el.find(".breadcrumb").removeClass("show").addClass("hide");

            //TODO: not nice, need to move out
            $("#discover").find(".content").removeClass("next-level");

            that.$el.find("ul").find("li").removeClass("show").addClass("hide");
            setTimeout(function() {
                that.$el.find("ul li").remove();
            }, 500);
        },
        removeLastLevel: function() {
            this.$el.find("li:last").remove();
        },
        showTopic: function() {
            this.$el.find(".show-list").show();
        },
        hideTopic: function() {
            this.$el.find(".show-list").hide();
        }
    });

    function bindEvents(ctx) {
        ctx.$el.on("click", ".show-list", function(e) {
            ctx.messageBus.publish("search-list-show");
            e.preventDefault();
        });
    }
}(HAF, jQuery));
(function (HAF, $) {
    "use strict";

    APP.view.Breadcrumb = HAF.View.extend({
        level: 0,
        container: "#appBreadcrumb",
        render: function(html) {
            var $ul = this.$el.find("ul");
            $ul.append(html);
            this.$el.addClass("show");
            $("#discover").find(".content").addClass("next-level");
            setTimeout(function() {
                $ul.find("li:not(.show)").addClass("show");
            }, 10);
        },
        hide: function() {
            var that = this;
            that.$el.find(".breadcrumb").removeClass("show").addClass("hide");
            $("#discover").find(".content").removeClass("next-level");
            that.$el.find("ul").find("li").removeClass("show").addClass("hide");
            setTimeout(function() {
                that.$el.find("ul li").remove();
            }, 500);
        },
        removeLastLevel: function() {
            this.$el.find("li:last").remove();
        }
    });

}(HAF, jQuery));
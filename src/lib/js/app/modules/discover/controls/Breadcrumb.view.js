(function (HAF, $) {
    "use strict";

    APP.view.Breadcrumb = HAF.View.extend({
        level: 0,
        container: "#discover .breadcrumb",
        render: function(html) {
            var $ul = this.$container.$item.find("ul");
            $ul.append(html);
            var $discover = $("#discover");
            $discover.find(".breadcrumb").addClass("show");
            $discover.find(".content").addClass("next-level");
            setTimeout(function() {
                $ul.find("li:not(.show)").addClass("show");
            }, 10);
        }
    });

}(HAF, jQuery));
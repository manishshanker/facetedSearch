(function ($) {
    "use strict";

    $.tabs = {
        destroy: "TAB_DESTROY"
    };

    $.fn.tabs = function (options) {

        if (options === $.tabs.destroy) {
            $(this).trigger($.tabs.destroy);
        }

        return this.each(function () {
            options = $.extend({
                onChange: $.noop
            }, options);
            var $el = $(this);
            $el.on("click", ".tab-nav li a", function (e) {
                onTabItemClick($(this), $el, options, e);
            });
            $el.on($.tabs.destroy, function() {
                $el.off("click", ".tab-nav li a");
                $el.off($.tabs.destroy);
                $el = null;
            });
            $el.find(".tab-nav li a:eq(0)").trigger("click");
        });

    };

    function onTabItemClick($link, $el, options, e) {
        var selected = $el.data("selected");
        if (selected) {
            $el.find("a[href$=" + selected + "]").removeClass("selected");
            $(selected).hide();
        }
        $link.addClass("selected");
        selected = /(#(.+))/.exec($link.attr("href"))[1];
        $(selected).show();
        $el.data("selected", selected);
        options.onChange(/#(.+)/.exec(selected)[1]);
        e.preventDefault();
    }

}(jQuery));
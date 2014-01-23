(function ($) {
    "use strict";

    $.fn.tabs = function (options) {

        return this.each(function () {
            options = $.extend({
                onChange: $.noop
            }, options);
            var $el = $(this);
            $el.on("click", ".tab-nav li a", function (e) {
                var selected = $el.data("selected");
                if (selected) {
                    $el.find("a[href$=" + selected + "]").removeClass("selected");
                    $(selected).hide();
                }
                var $link = $(this);
                $link.addClass("selected");
                selected = /(#(.+))/.exec($link.attr("href"))[1];
                $(selected).show();
                $el.data("selected", selected);
                options.onChange(/#(.+)/.exec(selected)[1]);
                e.preventDefault();
            });
            $el.find(".tab-nav li a:eq(0)").trigger("click");
        });

    };

}(jQuery));
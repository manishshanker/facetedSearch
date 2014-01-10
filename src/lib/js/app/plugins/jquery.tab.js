(function($) {

    $.fn.tabs = function() {

        return this.each(function() {
            var $el = $(this);
            $el.on("click", "li a", function(e) {
                var selected = $el.data("selected");
                if (selected) {
                    $(selected).hide();
                }
                selected = /(#(.+))/.exec($(this).attr("href"))[2];
                $(selected).show();
                $el.data("selected", selected);
                e.preventDefault();
            })
        })

    }

}(jQuery));
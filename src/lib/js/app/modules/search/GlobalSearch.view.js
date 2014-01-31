(function (HAF, $) {
    "use strict";

    APP.view.GlobalSearch = HAF.View.extend({
        container: "#appGlobalSearch",
        render: function (dataSource, templateProvider, onSelect) {
            var that = this;
            that.$el.autocomplete({
                minLength: 0,
                focus: function (event, ui) {
                    that.$el.val(ui.item.label);
                    return false;
                },
                select: function (event, ui) {
                    that.$el.val(ui.item.label);
                    onSelect(ui.item);
                    return false;
                },
                source: dataSource
            }).data("ui-autocomplete")._renderItem = getItemRenderer(templateProvider);
        }
    });

    function getItemRenderer(templateProvider) {
        return function ($ul, item) {
            return $(templateProvider(this.term, item)).data("item.autocomplete", item).appendTo($ul);
        };
    }

}(HAF, jQuery));
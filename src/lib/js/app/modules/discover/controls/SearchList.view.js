(function (HAF, $) {
    "use strict";

    APP.view.SearchList = HAF.View.extend({
        level: 0,
        container: "#appSearchList",
        render: function(html) {
            var that = this;
            that._super(html);
            setTimeout(function() {
                addCSSClassToListItem(that, that.level, "show");
            }, 10);
        },
        renderNewList: function(template, data) {
            var that = this;
            setTimeout(function() {
                addCSSClassToListItem(that, that.level, "hide");
                that.$el.append(template.process(data));
                that.level++;
            }, 10);
            setTimeout(function() {
                addCSSClassToListItem(that, that.level, "show");
            }, 50);
        },
        goBackToFirstLevel: function() {
            var that = this;
            var $items = that.$el.find(".item:not('.level-0')");
            $items.addClass("hide-back");
            setTimeout(function() {
                $items.remove();
            }, 500);
            that.level = 0;
            addCSSClassToListItem(that, that.level, "show");
            removeCSSClassFromListItem(that, that.level, "hide");
        }
    });

    function removeCSSClassFromListItem(context, level, cssClass) {
        context.$el.find(".level-"+level).removeClass(cssClass);
    }

    function addCSSClassToListItem(context, level, cssClass) {
        context.$el.find(".level-"+level).addClass(cssClass);
    }

}(HAF, jQuery));
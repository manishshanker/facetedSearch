(function (HAF, $) {
    "use strict";

    APP.view.SearchList = HAF.View.extend({
        level: 0,
        container: "#discover .search-list",
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
                that.$container.$item.append(template.process(data));
                that.level++;
            }, 10);
            setTimeout(function() {
                addCSSClassToListItem(that, that.level, "show");
            }, 50);
        },
        goBackToFirstLevel: function() {
            var that = this;
            that.$container.$item.find(".item:not('.level-0')").addClass("hide-back");
//            that.$container.$item.find("h2:not(:eq(0))").remove();
//            that.$container.$item.find("ul:not(:eq(0))").remove();
            that.level = 0;
            addCSSClassToListItem(that, that.level, "show");
            removeCSSClassFromListItem(that, that.level, "hide");
        }
    });

    function removeCSSClassFromListItem(context, level, cssClass) {
        context.$container.$item.find(".level-"+level).removeClass(cssClass);
    }

    function addCSSClassToListItem(context, level, cssClass) {
        context.$container.$item.find(".level-"+level).addClass(cssClass);
    }

}(HAF, jQuery));
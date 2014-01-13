(function (HAF, $) {
    "use strict";

    APP.view.SearchList = HAF.View.extend({
        level: 0,
        container: "#appSearchList",
        render: function(html) {
            var that = this;
            that._super(html);
            setTimeout(function() {
                showItemInLevel(that, that.level);
            }, 10);
        },
        renderNewList: function(template, data) {
            console.log("renderNewList")
            var that = this;
            setTimeout(function() {
                hideItemInLevel(that, that.level);
                that.$el.append(template.process(data));
                that.level++;
            }, 10);
            setTimeout(function() {
                showItemInLevel(that, that.level);
            }, 50);
        },
        removeList: function(id, level) {
            var that = this;
            that.currentFilterId = id;
            hideItemInLevel(that, level+1);
            showItemInLevel(that, level);
            setTimeout(function() {
                that.$el.find(".item").eq(level+1).remove();
            }, 500);
        },
        goBackToFirstLevel: function() {
            var that = this;
            var $items = that.$el.find(".item:not(:eq(0))");
            $items.addClass("hide-back");
            setTimeout(function() {
                $items.remove();
            }, 500);
            that.level = 0;
            showItemInLevel(that, that.level);
        }
    });

    function showItemInLevel(context, level) {
        context.$el.find(".item").eq(level).removeClass("hide").addClass("show");
    }

    function hideItemInLevel(context, level) {
        context.$el.find(".item").eq(level).removeClass("show").addClass("hide");
    }

}(HAF, jQuery));
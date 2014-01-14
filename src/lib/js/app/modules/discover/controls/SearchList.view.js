(function (HAF) {
    "use strict";

    APP.view.SearchList = HAF.View.extend({
        level: 0,
        container: "#appSearchList",
        messageBus: null,
        init: function(messageBus) {
            this._super();
            this.messageBus = messageBus;
            bindEvents(this);
        },
        render: function(html) {
            var that = this;
            that.$el.append(html);
            setTimeout(function() {
                showItemInLevel(that, that.level);
            }, 10);
        },
        renderNewList: function(template, data) {
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
        },
        show: function() {
            this.$el.removeClass("hide");
        },
        hide: function() {
            this.$el.addClass("hide");
        }
    });

    function bindEvents(context) {
        context.$el.on("click", ".show-hide-link", function(e) {
            context.messageBus.publish("search-list-hide");
            e.preventDefault();
        });
    }

    function showItemInLevel(context, level) {
        context.$el.find(".item").eq(level).removeClass("hide").addClass("show");
    }

    function hideItemInLevel(context, level) {
        context.$el.find(".item").eq(level).removeClass("show").addClass("hide");
    }

}(HAF));
(function (HAF) {
    "use strict";

    APP.controller.Breadcrumb = HAF.Controller.extend({
        autoShowHide: true,
        currentFilterId: null,
        inject: function () {
            return {
                templates: {
                    breadcrumb: new HAF.Template("breadcrumbItemTemplate")
                },
                views: {
                    breadcrumb: new APP.view.Breadcrumb(this.messageBus)
                }
            };
        },
        update: function (items, id) {
            var that = this;
            var newLevelLength, oldLevelLength;
            var newItem = items[items.length - 1];
            newItem.pathId = id;
            if (that.currentFilterId) {
                newLevelLength = id.split("_").length;
                oldLevelLength = that.currentFilterId.split("_").length;
                if (newLevelLength > oldLevelLength) {
                    that.views.breadcrumb.render(that.templates.breadcrumb.process(newItem));
                } else {
                    for (var n = 0; n < (oldLevelLength - newLevelLength); n++) {
                        that.views.breadcrumb.removeLastLevel();
                    }
                }
            } else {
                that.views.breadcrumb.render(that.templates.breadcrumb.process(newItem));
            }
            that.currentFilterId = id;
        },
        hide: function () {
            this.currentFilterId = null;
            this._super();
        },
        hideTopic: function () {
            this.views.breadcrumb.hideTopic();
        },
        showTopic: function (topicInfo) {
            this.views.breadcrumb.showTopic(topicInfo);
        }
    });

}(HAF));
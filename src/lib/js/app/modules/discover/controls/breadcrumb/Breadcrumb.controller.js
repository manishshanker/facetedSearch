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
        update: function (item, id) {
            var newLevelLength, oldLevelLength;
            item.pathId = id;
            if (this.currentFilterId) {
                newLevelLength = id.split("_").length;
                oldLevelLength = this.currentFilterId.split("_").length;
                if (newLevelLength > oldLevelLength) {
                    this.views.breadcrumb.render(this.templates.breadcrumb.process(item));
                } else {
                    for (var n = 0; n < (oldLevelLength - newLevelLength); n++) {
                        this.views.breadcrumb.removeLastLevel();
                    }
                }
            } else {
                this.views.breadcrumb.render(this.templates.breadcrumb.process(item));
            }
            this.currentFilterId = id;
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
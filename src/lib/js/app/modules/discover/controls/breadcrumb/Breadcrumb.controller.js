(function (HAF) {
    "use strict";

    APP.controller.Breadcrumb = HAF.Controller.extend({
        autoShowHide: true,
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
        update: function (items) {
            var that = this;
            that.views.breadcrumb.remove();
            for (var n = 0; n < items.length; n++) {
                var item = items[n];
                item.pathId = item.id;
                that.views.breadcrumb.render(that.templates.breadcrumb.process(item));
            }
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
(function (HAF) {
    "use strict";

    APP.controller.Breadcrumb = HAF.Controller.extend({
        autoShowHide: true,
        inject: {
            templates: ["breadcrumbItem"],
            views: ["breadcrumb"]
        },
        update: function (items) {
            var that = this;
            that.views.breadcrumb.remove();
            for (var n = 0; n < items.length; n++) {
                var item = items[n];
                item.pathId = item.id;
                that.views.breadcrumb.render(that.templates.breadcrumbItem.process(item));
            }
        },
        hideTopic: function () {
            this.views.breadcrumb.hideTopic();
        },
        showTopic: function (topicInfo) {
            this.views.breadcrumb.showTopic(topicInfo);
        }
    });

}(HAF));
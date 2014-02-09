(function (HAF) {
    "use strict";

    ICEX.controller.Breadcrumb = HAF.Controller.extend({
        autoShowHide: true,
        inject: {
            templates: {
                breadcrumbItem: "tmpl!BreadcrumbItem"
            },
            views: ["breadcrumb"]
        },
        update: function (items) {
            var that = this;
            that.views.breadcrumb.remove();
            var tmplBreadcrumbItem = this.templates.breadcrumbItem;
            tmplBreadcrumbItem.load(function() {
                for (var n = 0; n < items.length; n++) {
                    var item = items[n];
                    item.pathId = item.id;
                    that.views.breadcrumb.render(tmplBreadcrumbItem.process(item));
                }
            });
        },
        hideTopic: function () {
            this.views.breadcrumb.hideTopic();
        },
        showTopic: function (topicInfo) {
            this.views.breadcrumb.showTopic(topicInfo);
        }
    });

}(HAF));
(function (HAF) {
    "use strict";

    APP.controller.Breadcrumb = HAF.Controller.extend({
        getTemplates: function () {
            return {
                breadcrumb: new HAF.Template("breadcrumbItemTemplate")
            };
        },
        getViews: function () {
            return {
                breadcrumb: new APP.view.Breadcrumb()
            };
        },
        render: function(item) {
            this.getViews().breadcrumb.render(this.getTemplates().breadcrumb.process(item));
        },
        hide: function() {
            this.getViews().breadcrumb.hide();
        }
    });

}(HAF));
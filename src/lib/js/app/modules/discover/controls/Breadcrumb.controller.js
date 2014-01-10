(function (HAF) {
    "use strict";

    APP.controller.Breadcrumb = HAF.Controller.extend({
        init: function() {
            this.inject({
                templates: {
                    breadcrumb: new HAF.Template("breadcrumbItemTemplate")
                },
                views: {
                    breadcrumb: new APP.view.Breadcrumb()
                }
            })
        },
        render: function(item) {
            this.views.breadcrumb.render(this.templates.breadcrumb.process(item));
        },
        hide: function() {
            this.views.breadcrumb.hide();
        }
    });

}(HAF));
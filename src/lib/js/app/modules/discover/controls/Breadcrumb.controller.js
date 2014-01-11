(function (HAF) {
    "use strict";

    APP.controller.Breadcrumb = HAF.Controller.extend({
        autoShowHide: true,
        currentFilterId: null,
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
        render: function(item, id) {
            item.pathId = id;
            if (this.currentFilterId) {
                if (id.split("_").length > this.currentFilterId.split("_").length) {
                    this.views.breadcrumb.render(this.templates.breadcrumb.process(item));
                } else {
                    this.views.breadcrumb.removeLastLevel();
                }
            } else {
                this.views.breadcrumb.render(this.templates.breadcrumb.process(item));
            }
            this.currentFilterId = id;
        },
        hide: function() {
            this.currentFilterId = null;
            this._super();
        }
    });

}(HAF));
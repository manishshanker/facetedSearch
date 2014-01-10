(function (HAF) {
    "use strict";

    APP.view.VisualResult = HAF.View.extend({
        container: "#resultTypeVisual",
        render: function (data) {
            var container = document.getElementById("resultTypeVisual");
            var options = {
                nodes: {
                    fontSize: 11
                }
            };
            new vis.Graph(container, data, options);
        }
    });

}(HAF));



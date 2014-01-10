(function (HAF) {
    "use strict";

    APP.view.VisualResult = HAF.View.extend({
        container: "#discover #resultTypeVisual",
        render: function (data) {
            var container = document.getElementById("resultTypeVisual");
            var options = {
                nodes: {
                    shape: 'circle',
                    fontSize: 11
                }
            };
            new vis.Graph(container, data, options);
        }
    });

}(HAF));



(function (HAF, $jit) {
    "use strict";

    var STYLE = {
        relationshipNode: {
            color: "#999",
            backgroundColor: "#B6E1FF"
        },
        itemNode: {
            color: "#000",
            highlightedBGColor: "#eea409",
            backgroundColor: "#ddd"
        }
    };

    APP.view.VisualFiltering = HAF.View.extend({
        autoLayout: true,
        container: "#appVisualFiltering",
        graph: null,
        lastSelectedNode: null,
        lastDataSet: null,
        render: function (data) {
            var that = this;
            that.lastDataSet = data;
            renderGraph(that, data);
            that.setStateLoaded();
            that.loaded = true;
        },
        layoutChange: function () {
            var that = this;
            if (!that.loaded) {
                return;
            }
            clearTimeout(that.rerenderTimer);
            that.rerenderTimer = setTimeout(function () {
                that.scrollToCenter();
            }, 500);
        },
        setStateLoading: function () {
            positionLoadingMessage(this);
            this.$el.addClass("loading");
        },
        setStateLoaded: function () {
            this.$el.removeClass("loading");
        },
        getStyle: function() {
            return STYLE;
        },
        scrollToCenter: function() {
            var that = this;
            that.$el.animate({
                scrollTop: that.$el.find(".graph").height()/2 - (that.$el.height()/2),
                scrollLeft: that.$el.find(".graph").width()/2 - (that.$el.width()/2)
            }, 200, function() {
                positionLoadingMessage(that);
            });
        }
    });

    function positionLoadingMessage(ctx) {
        ctx.$el.find(".loading-message").css({
            top: 20 + ctx.$el.scrollTop(),
            left: 20 + ctx.$el.scrollLeft(),
            bottom: "auto",
            right: "auto"
        });
    }

    function renderGraph(ctx, graphData) {
        var NODE_WIDTH = 150;

        var st = new $jit.ST({
            injectInto: "appVisualFilteringGraph",
            duration: 500,
            transition: $jit.Trans.Quart.easeInOut,
            levelDistance: 40,
            levelsToShow: 2,
            Node: {
                height: 20,
                width: NODE_WIDTH,
                type: "nodeLine",
                color: STYLE.relationshipNode.backgroundColor,
                lineWidth: 2,
                align: "center",
                overridable: true
            },

            Edge: {
                type: "bezier",
                lineWidth: 2,
                color: STYLE.relationshipNode.backgroundColor,
                overridable: true
            },

            request: function (nodeId, level, onComplete) {
                ctx.cacheData = ctx.cacheData || {};
                if (ctx.cacheData[nodeId]) {
                    onComplete.onComplete(nodeId, ctx.cacheData[nodeId]);
                    ctx.setStateLoaded();
                } else {
                    ctx.messageBus.publish("app-search-filtering-changed", {nodeId: nodeId, level: level, callback: function (data) {
                        ctx.cacheData[nodeId] = data;
                        onComplete.onComplete(nodeId, data);
                        ctx.setStateLoaded();
                    }});
                }
            },

            onBeforeCompute: function () {
                ctx.scrollToCenter();
                ctx.setStateLoading();
            },

            onAfterCompute: function () {
                ctx.setStateLoaded();
            },

            onCreateLabel: function (label, node) {
                label.id = node.id;
                label.innerHTML = node.name;
                var style = label.style;
                label.onclick = function () {
                    if (node.data.type === "R") {
                        return;
                    }
                    st.onClick(node.id);
                    if (ctx.lastSelectedNode) {
                        ctx.lastSelectedNode.style.backgroundColor = STYLE.itemNode.backgroundColor;
                    }
                    style.backgroundColor = STYLE.itemNode.highlightedBGColor;
                    ctx.lastSelectedNode = label;
                };
                style.width = NODE_WIDTH + "px";
                style.height = 17 + "px";
                style.cursor = node.data.type === "R" ? "default" : "pointer";
                style.color = node.data.color || STYLE.itemNode.color;
                style.backgroundColor = node.data.backgroundColor || node.data.$backgroundColor || STYLE.itemNode.backgroundColor;
                style.fontSize = "0.7em";
                style.textAlign = "center";
                style.textDecoration = node.data.type === "R" ? "none" : "underline";
                style.paddingTop = "3px";
            },

            onBeforePlotNode: function (node) {
                if (node.selected) {
                    node.data.$backgroundColor = STYLE.itemNode.highlightedBGColor;
                } else {
                    delete node.data.$backgroundColor;
                }
            },

            onBeforePlotLine: function (adj) {
                if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                    adj.data.$color = STYLE.itemNode.highlightedBGColor;
                    adj.data.$lineWidth = 3;
                } else {
                    delete adj.data.$color;
                    delete adj.data.$lineWidth;
                }
            }
        });
        st.loadJSON(graphData);
        st.compute();
        st.onClick(st.root);
        ctx.scrollToCenter();
        ctx.st = st;
    }

    $jit.ST.Plot.NodeTypes.implement({
        nodeLine: {
            render: function (node, canvas, animating) {
                if(animating === "expand" || animating === "contract") {
                    var pos = node.pos.getc(true), nodeConfig = this.node;
                    var width  = nodeConfig.width, height = nodeConfig.height;
                    var alignPos = this.getAlignedPos(pos, width, height);
                    var canvasCtx = canvas.getCtx(), ort = this.config.orientation;
                    canvasCtx.beginPath();
                    if(ort === "left" || ort === "right") {
                        canvasCtx.moveTo(alignPos.x, alignPos.y + height / 2);
                        canvasCtx.lineTo(alignPos.x + width, alignPos.y + height / 2);
                    } else {
                        canvasCtx.moveTo(alignPos.x + width / 2, alignPos.y);
                        canvasCtx.lineTo(alignPos.x + width / 2, alignPos.y + height);
                    }
                    canvasCtx.stroke();
                }
            }
        }
    });

}(HAF, $jit));
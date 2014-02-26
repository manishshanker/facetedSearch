(function ($) {
    "use strict";

    $.fn.delayedAddClass = function(cssClass, callback) {
        callback = callback || $.noop;
        var $els = $(this);
        setTimeout(function() {
            $els.addClass(cssClass);
            callback();
            $els = null;
        }, 10);
        return this;
    };

    $.fn.delayedRemoveClass = function(cssClass, callback) {
        callback = callback || $.noop;
        var $els = $(this);
        setTimeout(function() {
            $els.removeClass(cssClass);
            callback();
            $els = null;
        }, 10);
        return this;
    };

    $.fn.delayedAddRemoveClass = function(addCSSClass, removeCSSClass, callback) {
        callback = callback || $.noop;
        var $els = $(this);
        setTimeout(function() {
            $els.addClass(addCSSClass).removeClass(removeCSSClass);
            callback();
            $els = null;
        }, 10);
        return this;
    };

    $.fn.delayedRemove = function(callback) {
        callback = callback || $.noop;
        var $els = $(this);
        setTimeout(function() {
            $els.remove();
            callback();
            $els = null;
        }, 500);
        return this;
    };

}(jQuery));
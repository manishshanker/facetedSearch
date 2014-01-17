(function (window) {
    "use strict";
    window.addEventListener('load', function (e) {

        window.applicationCache.addEventListener('updateready', function (e) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                // Browser downloaded a new app cache.
                if (confirm('A new version of this application is available. Load it?')) {
                    window.location.reload();
                }
            } else {
                // Manifest didn't changed. Nothing new to server.
            }
        }, false);

    }, false);
})(window);


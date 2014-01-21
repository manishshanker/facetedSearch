(function (HAF, $) {
    "use strict";

    APP.service.SearchList = HAF.Service.extend({
        cachedResultData: {},
        fetch: function (context, id, callback) {
            //ajax call and cache response
        },
        getMetaInfo: function (id) {
            return findItem(this.cachedResultData, id);
        }
    });

    function findItem(items, id) {
        var itemFound = null;
        $.each(items, function (key, item) {
            if (item.id === id) {
                itemFound = item;
                return false;
            } else {
                $.each(item.items, function (index, item) {
                    if (item.id === id) {
                        itemFound = item;
                        return false;
                    }
                    return true;
                });
            }
            return true;
        });
        itemFound = itemFound || {
            title: "Lorem ipsum",
            id: id
        };
        return itemFound;
    }

}(HAF, jQuery));
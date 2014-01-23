(function (HAF, $) {
    "use strict";

    APP.service.SearchList = HAF.Service.extend({
        cachedResultData: null,
        currentFilterInfo: null,
        fetch: function (context, ids, callback) {
            //ajax call and cache response
        },
        getDataForId: function (ids) {
            var data;
            if (!ids) {
                data = this.cachedResultData;
            } else {
                data = findItem(this.cachedResultData, ids);
            }
            return data || {};
        },
        getMetaInfo: function (ctx, ids, callback) {
            ids = ids.split("_");
            var data = [];
            var d = [];
            for (var n = 0; n < ids.length; n++) {
                d.push(ids[n]);
                data.push(findItem(this.cachedResultData, d.join("_")));
            }
            callback(data || []);
        }
    });

    function findItem(items, id) {
        var itemFound = null;
        id = id + "";
        if (items.id === id) {
            itemFound = items;
        }
        if (!itemFound && items.items) {
            $.each(items.items, function (i, item) {
                if (item.id === id) {
                    itemFound = item;
                }
                if (!itemFound) {
                    itemFound = findItem(item, id);
                }
                return !itemFound;
            });
        }
        if (!itemFound && items.subGroup) {
            itemFound = findItem(items.subGroup, id);
        }
        return itemFound;
    }

}(HAF, jQuery));
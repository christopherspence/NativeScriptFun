var application = require("application");
var common = require("utils/utils-common");
require("utils/module-merge").merge(common, exports);
var ad;
(function (ad) {
    var collections;
    (function (collections) {
        function stringArrayToStringSet(str) {
            var hashSet = new java.util.HashSet();
            if ("undefined" !== typeof str) {
                for (var element in str) {
                    hashSet.add('' + str[element]);
                }
            }
            return hashSet;
        }
        collections.stringArrayToStringSet = stringArrayToStringSet;
        function stringSetToStringArray(stringSet) {
            var arr = [];
            if ("undefined" !== typeof stringSet) {
                var it = stringSet.iterator();
                while (it.hasNext()) {
                    var element = '' + it.next();
                    arr.push(element);
                }
            }
            return arr;
        }
        collections.stringSetToStringArray = stringSetToStringArray;
    })(collections = ad.collections || (ad.collections = {}));
    var layout;
    (function (layout) {
        var metrics;
        var density = -1;
        var MODE_SHIFT = 30;
        var MODE_MASK = 0x3 << MODE_SHIFT;
        var sdkVersion = -1;
        var useOldMeasureSpec = false;
        layout.UNSPECIFIED = 0 << MODE_SHIFT;
        layout.EXACTLY = 1 << MODE_SHIFT;
        layout.AT_MOST = 2 << MODE_SHIFT;
        function getMeasureSpecMode(spec) {
            return (spec & MODE_MASK);
        }
        layout.getMeasureSpecMode = getMeasureSpecMode;
        function getMeasureSpecSize(spec) {
            return (spec & ~MODE_MASK);
        }
        layout.getMeasureSpecSize = getMeasureSpecSize;
        function makeMeasureSpec(size, mode) {
            if (sdkVersion === -1) {
                sdkVersion = application.android.context.getApplicationInfo().targetSdkVersion;
                useOldMeasureSpec = sdkVersion <= android.os.Build.VERSION_CODES.JELLY_BEAN_MR1;
            }
            if (useOldMeasureSpec) {
                return size + mode;
            }
            return (size & ~MODE_MASK) | (mode & MODE_MASK);
        }
        layout.makeMeasureSpec = makeMeasureSpec;
        function getDisplayMetrics() {
            if (!metrics) {
                metrics = application.android.context.getResources().getDisplayMetrics();
            }
            return metrics;
        }
        layout.getDisplayMetrics = getDisplayMetrics;
        function getDisplayDensity() {
            if (density === -1) {
                density = getDisplayMetrics().density;
            }
            return density;
        }
        layout.getDisplayDensity = getDisplayDensity;
        function getDevicePixels(independentPixels, context) {
            return android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_DIP, independentPixels, context.getResources().getDisplayMetrics());
        }
        layout.getDevicePixels = getDevicePixels;
        function getDeviceIndependentPixels(devicePixels, context) {
            return devicePixels / getDevicePixels(1, context);
        }
        layout.getDeviceIndependentPixels = getDeviceIndependentPixels;
    })(layout = ad.layout || (ad.layout = {}));
    var id;
    (function (id) {
        id.home = 0x0102002c;
    })(id = ad.id || (ad.id = {}));
    var resources;
    (function (_resources) {
        function getDrawableId(name) {
            return getId(":drawable/" + name);
        }
        _resources.getDrawableId = getDrawableId;
        function getStringId(name) {
            return getId(":string/" + name);
        }
        _resources.getStringId = getStringId;
        function getId(name) {
            var context = application.android.context;
            var resources = context.getResources();
            var packageName = context.getPackageName();
            var uri = packageName + name;
            return resources.getIdentifier(uri, null, null);
        }
        _resources.getId = getId;
    })(resources = ad.resources || (ad.resources = {}));
    function async(doInBackground, callback) {
        var handlerType = android.os.Handler.extend({
            handleMessage: function (message) {
                callback(message.obj);
            }
        });
        var handler = new handlerType(android.os.Looper.getMainLooper());
        var runnable = new java.lang.Runnable({
            run: function () {
                var result = doInBackground();
                var message = handler.obtainMessage(1, result);
                handler.sendMessage(message);
            }
        });
        var thread = new java.lang.Thread(runnable);
        thread.start();
    }
    ad.async = async;
})(ad = exports.ad || (exports.ad = {}));
function GC() {
    gc();
}
exports.GC = GC;

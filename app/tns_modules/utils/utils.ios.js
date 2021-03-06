var common = require("utils/utils-common");
var colorModule = require("color");
require("utils/module-merge").merge(common, exports);
var ios;
(function (ios) {
    var collections;
    (function (collections) {
        function jsArrayToNSArray(str) {
            var arr = new NSMutableArray();
            if ("undefined" !== typeof str) {
                for (var element in str) {
                    arr.addObject(str[element]);
                }
            }
            return arr;
        }
        collections.jsArrayToNSArray = jsArrayToNSArray;
        function nsArrayToJSArray(a) {
            var arr = [];
            if ("undefined" !== typeof a) {
                for (var i = 0; i < a.count(); i++) {
                    arr.push(a.objectAtIndex(i));
                }
            }
            return arr;
        }
        collections.nsArrayToJSArray = nsArrayToJSArray;
    })(collections = ios.collections || (ios.collections = {}));
    function getColor(uiColor) {
        var redRef = new interop.Reference();
        var greenRef = new interop.Reference();
        var blueRef = new interop.Reference();
        var alphaRef = new interop.Reference();
        uiColor.getRedGreenBlueAlpha(redRef, greenRef, blueRef, alphaRef);
        var red = redRef.value * 255;
        var green = greenRef.value * 255;
        var blue = blueRef.value * 255;
        var alpha = alphaRef.value * 255;
        return new colorModule.Color(alpha, red, green, blue);
    }
    ios.getColor = getColor;
    function getActualHeight(uiView) {
        if (uiView.window && !uiView.hidden) {
            return uiView.frame.size.height;
        }
        return 0;
    }
    ios.getActualHeight = getActualHeight;
})(ios = exports.ios || (exports.ios = {}));
function GC() {
    __collect();
}
exports.GC = GC;

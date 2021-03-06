var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dependencyObservable = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");
var textBase = require("ui/text-base");
exports.hintProperty = new dependencyObservable.Property("hint", "TextField", new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataOptions.None));
exports.secureProperty = new dependencyObservable.Property("secure", "TextField", new proxy.PropertyMetadata(false, dependencyObservable.PropertyMetadataOptions.None));
require("utils/module-merge").merge(textBase, exports);
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(TextField.prototype, "hint", {
        get: function () {
            return this._getValue(exports.hintProperty);
        },
        set: function (value) {
            this._setValue(exports.hintProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextField.prototype, "secure", {
        get: function () {
            return this._getValue(exports.secureProperty);
        },
        set: function (value) {
            this._setValue(exports.secureProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    return TextField;
})(textBase.TextBase);
exports.TextField = TextField;

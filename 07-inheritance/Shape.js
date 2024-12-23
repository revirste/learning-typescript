"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(_name, _area) {
        this._name = _name;
        this._area = _area;
    }
    Object.defineProperty(Shape.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "area", {
        get: function () {
            return this._area;
        },
        set: function (area) {
            this._area = area;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.getInfo = function () {
        return "name={".concat(this._name, "}, area={").concat(this._area, "}");
    };
    return Shape;
}());
exports.Shape = Shape;

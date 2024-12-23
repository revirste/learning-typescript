"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShootingGame = void 0;
var Game_1 = require("./Game");
var ShootingGame = /** @class */ (function (_super) {
    __extends(ShootingGame, _super);
    function ShootingGame(title, rating, cameraType) {
        var _this = _super.call(this, title, rating) || this;
        _this._cameraType = cameraType;
        return _this;
    }
    Object.defineProperty(ShootingGame.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShootingGame.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (rating) {
            this._rating = rating;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShootingGame.prototype, "cameraType", {
        get: function () {
            return this._cameraType;
        },
        set: function (cameraType) {
            this._cameraType = cameraType;
        },
        enumerable: false,
        configurable: true
    });
    ShootingGame.prototype.toString = function () {
        return "Title: ".concat(this._title, "\nRating: ").concat(this._rating, "\nCamera Type: ").concat(this._cameraType);
    };
    return ShootingGame;
}(Game_1.Game));
exports.ShootingGame = ShootingGame;

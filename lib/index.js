"use strict";
exports.__esModule = true;
var Mosaic = /** @class */ (function () {
    function Mosaic(options) {
        var _a, _b;
        var src = options.src;
        this.nw = Math.ceil((_a = options.nw) !== null && _a !== void 0 ? _a : 0.2);
        this.nh = Math.ceil((_b = options.nh) !== null && _b !== void 0 ? _b : 0.2);
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.image = new Image();
        this.src = src;
        this.image.onload = this.onload;
    }
    Mosaic.prototype.onload = function () {
        var _a = this, image = _a.image, canvas = _a.canvas, ctx = _a.ctx;
        var width = image.width, height = image.height;
        canvas.width = width;
        canvas.height = height;
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, 0, 0);
        document.body.appendChild(canvas);
    };
    Mosaic.prototype.mosaic = function () {
    };
    return Mosaic;
}());
exports["default"] = Mosaic;

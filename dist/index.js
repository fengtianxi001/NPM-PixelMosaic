(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Mosaic = /** @class */ (function () {
        function Mosaic(options) {
            var src = options.src;
            this.width = 0;
            this.height = 0;
            this.uw = 1;
            this.uh = 1;
            this.nw = (options.nw || 50) / 200;
            this.nh = (options.nh || 50) / 200;
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.image = new Image();
            this.image.src = src;
            this.image.onload = this.onload.bind(this);
        }
        Mosaic.prototype.onload = function () {
            var _a = this, image = _a.image, canvas = _a.canvas, ctx = _a.ctx, nw = _a.nw, nh = _a.nh;
            var width = image.width, height = image.height;
            this.uw = Math.ceil(width * nw);
            this.uh = Math.ceil(height * nh);
            canvas.width = width;
            canvas.height = height;
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, 0, 0);
            this.height = height;
            this.width = width;
            this.mosaic();
        };
        Mosaic.prototype.mosaic = function () {
            var _a = this, width = _a.width, height = _a.height, uw = _a.uw, uh = _a.uh;
            var ctx = this.ctx;
            for (var row = 1; row - 1 <= height / uh; row++) {
                for (var col = 1; col - 1 <= width / uw; col++) {
                    var pos = [(col - 1) * uw, (row - 1) * uh, uw, uh];
                    ctx.fillStyle = this.fetchStyle(pos);
                    ctx.fillRect.apply(ctx, pos);
                }
            }
        };
        Mosaic.prototype.fetchStyle = function (pos) {
            var ctx = this.ctx;
            var data = ctx.getImageData.apply(ctx, pos).data;
            var r = 0;
            var g = 0;
            var b = 0;
            var a = 0;
            var leng = data.length / 4;
            for (var i = 0; i <= leng; i += 4) {
                r += data[i];
                g += data[i + 1];
                b += data[i + 2];
                a += data[i + 3];
            }
            r = Math.floor((r / leng) * 4);
            g = Math.floor((g / leng) * 4);
            b = Math.floor((b / leng) * 4);
            a = Math.floor((a / leng) * 4);
            return "rgba(".concat(r, ",").concat(g, ",").concat(b, ")");
        };
        return Mosaic;
    }());
    exports.default = Mosaic;
});

var Point =
/** @class */
function () {
  function Point(x, y, pressure, time) {
    if (isNaN(x) || isNaN(y)) {
      throw new Error("Point is invalid: (".concat(x, ", ").concat(y, ")"));
    }

    this.x = +x;
    this.y = +y;
    this.pressure = pressure || 0;
    this.time = time || Date.now();
  }

  Point.prototype.distanceTo = function (start) {
    return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
  };

  Point.prototype.equals = function (other) {
    return this.x === other.x && this.y === other.y && this.pressure === other.pressure && this.time === other.time;
  };

  Point.prototype.velocityFrom = function (start) {
    return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 0;
  };

  return Point;
}();

export { Point };
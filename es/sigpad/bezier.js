import { Point } from './point';

var Bezier =
/** @class */
function () {
  function Bezier(startPoint, control2, control1, endPoint, startWidth, endWidth) {
    this.startPoint = startPoint;
    this.control2 = control2;
    this.control1 = control1;
    this.endPoint = endPoint;
    this.startWidth = startWidth;
    this.endWidth = endWidth;
  }

  Bezier.fromPoints = function (points, widths) {
    var c2 = this.calculateControlPoints(points[0], points[1], points[2]).c2;
    var c3 = this.calculateControlPoints(points[1], points[2], points[3]).c1;
    return new Bezier(points[1], c2, c3, points[2], widths.start, widths.end);
  };

  Bezier.calculateControlPoints = function (s1, s2, s3) {
    var dx1 = s1.x - s2.x;
    var dy1 = s1.y - s2.y;
    var dx2 = s2.x - s3.x;
    var dy2 = s2.y - s3.y;
    var m1 = {
      x: (s1.x + s2.x) / 2.0,
      y: (s1.y + s2.y) / 2.0
    };
    var m2 = {
      x: (s2.x + s3.x) / 2.0,
      y: (s2.y + s3.y) / 2.0
    };
    var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
    var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
    var dxm = m1.x - m2.x;
    var dym = m1.y - m2.y;
    var k = l2 / (l1 + l2);
    var cm = {
      x: m2.x + dxm * k,
      y: m2.y + dym * k
    };
    var tx = s2.x - cm.x;
    var ty = s2.y - cm.y;
    return {
      c1: new Point(m1.x + tx, m1.y + ty),
      c2: new Point(m2.x + tx, m2.y + ty)
    };
  }; // Returns approximated length. Code taken from https://www.lemoda.net/maths/bezier-length/index.html.


  Bezier.prototype.length = function () {
    var steps = 10;
    var length = 0;
    var px;
    var py;

    for (var i = 0; i <= steps; i += 1) {
      var t = i / steps;
      var cx = this.point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
      var cy = this.point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);

      if (i > 0) {
        var xdiff = cx - px;
        var ydiff = cy - py;
        length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
      }

      px = cx;
      py = cy;
    }

    return length;
  }; // Calculate parametric value of x or y given t and the four point coordinates of a cubic bezier curve.


  Bezier.prototype.point = function (t, start, c1, c2, end) {
    // prettier-ignore
    return start * (1.0 - t) * (1.0 - t) * (1.0 - t) + 3.0 * c1 * (1.0 - t) * (1.0 - t) * t + 3.0 * c2 * (1.0 - t) * t * t + end * t * t * t;
  };

  return Bezier;
}();

export { Bezier };
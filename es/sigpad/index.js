/**
 * refer: https://github.com/szimek/signature_pad
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * https://web.archive.org/web/20160323213433/http://www.benknowscode.com/2012/09/path-interpolation-using-cubic-bezier_9742.html
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 */
var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

import { Bezier } from './bezier';
import { Point } from './point';
import { SignatureEventTarget } from './signature_event_target';
import { throttle } from '../helper';

var SignaturePad =
/** @class */
function (_super) {
  __extends(SignaturePad, _super);
  /* tslint:enable: variable-name */


  function SignaturePad(canvas, options) {
    if (options === void 0) {
      options = {};
    }

    var _this = _super.call(this) || this;

    _this.canvas = canvas; // Event handlers

    _this._handleMouseDown = function (event) {
      if (event.buttons === 1) {
        _this._drawningStroke = true;

        _this._strokeBegin(event);
      }
    };

    _this._handleMouseMove = function (event) {
      if (_this._drawningStroke) {
        _this._strokeMoveUpdate(event);
      }
    };

    _this._handleMouseUp = function (event) {
      if (event.buttons === 1 && _this._drawningStroke) {
        _this._drawningStroke = false;

        _this._strokeEnd(event);
      }
    };

    _this._handleTouchStart = function (event) {
      // Prevent scrolling.
      event.preventDefault();

      if (event.targetTouches.length === 1) {
        var touch = event.changedTouches[0];

        _this._strokeBegin(touch);
      }
    };

    _this._handleTouchMove = function (event) {
      // Prevent scrolling.
      event.preventDefault();
      var touch = event.targetTouches[0];

      _this._strokeMoveUpdate(touch);
    };

    _this._handleTouchEnd = function (event) {
      var wasCanvasTouched = event.target === _this.canvas;

      if (wasCanvasTouched) {
        event.preventDefault();
        var touch = event.changedTouches[0];

        _this._strokeEnd(touch);
      }
    };

    _this._handlePointerStart = function (event) {
      _this._drawningStroke = true;
      event.preventDefault();

      _this._strokeBegin(event);
    };

    _this._handlePointerMove = function (event) {
      if (_this._drawningStroke) {
        event.preventDefault();

        _this._strokeMoveUpdate(event);
      }
    };

    _this._handlePointerEnd = function (event) {
      _this._drawningStroke = false;
      var wasCanvasTouched = event.target === _this.canvas;

      if (wasCanvasTouched) {
        event.preventDefault();

        _this._strokeEnd(event);
      }
    };

    _this.velocityFilterWeight = options.velocityFilterWeight || 0.7;
    _this.minWidth = options.minWidth || 0.5;
    _this.maxWidth = options.maxWidth || 2.5;
    _this.throttle = 'throttle' in options ? options.throttle : 16; // in milisecondss

    _this.minDistance = 'minDistance' in options ? options.minDistance : 5; // in pixels

    _this.dotSize = options.dotSize || 0;
    _this.penColor = options.penColor || 'black';
    _this.backgroundColor = options.backgroundColor || 'rgba(0,0,0,0)';
    _this._strokeMoveUpdate = _this.throttle ? throttle(SignaturePad.prototype._strokeUpdate, _this.throttle) : SignaturePad.prototype._strokeUpdate;
    _this._ctx = canvas.getContext('2d');

    _this.clear(); // Enable mouse and touch event handlers


    _this.on();

    return _this;
  }

  SignaturePad.prototype.clear = function () {
    var _a = this,
        ctx = _a._ctx,
        canvas = _a.canvas; // Clear canvas using background color


    ctx.fillStyle = this.backgroundColor;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this._data = [];

    this._reset();

    this._isEmpty = true;
  };

  SignaturePad.prototype.fromDataURL = function (dataUrl, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    return new Promise(function (resolve, reject) {
      var image = new Image();
      var ratio = options.ratio || window.devicePixelRatio || 1;
      var width = options.width || _this.canvas.width / ratio;
      var height = options.height || _this.canvas.height / ratio;
      var xOffset = options.xOffset || 0;
      var yOffset = options.yOffset || 0;

      _this._reset();

      image.onload = function () {
        _this._ctx.drawImage(image, xOffset, yOffset, width, height);

        resolve();
      };

      image.onerror = function (error) {
        reject(error);
      };

      image.crossOrigin = 'anonymous';
      image.src = dataUrl;
      _this._isEmpty = false;
    });
  };

  SignaturePad.prototype.toDataURL = function (type, encoderOptions) {
    if (type === void 0) {
      type = 'image/png';
    }

    switch (type) {
      case 'image/svg+xml':
        return this._toSVG();

      default:
        return this.canvas.toDataURL(type, encoderOptions);
    }
  };

  SignaturePad.prototype.on = function () {
    // Disable panning/zooming when touching canvas element
    this.canvas.style.touchAction = 'none';
    this.canvas.style.msTouchAction = 'none';
    var isIOS = /Macintosh/.test(navigator.userAgent) && 'ontouchstart' in document; // The "Scribble" feature of iOS intercepts point events. So that we can lose some of them when tapping rapidly.
    // Use touch events for iOS platforms to prevent it. See https://developer.apple.com/forums/thread/664108 for more information.

    if (window.PointerEvent && !isIOS) {
      this._handlePointerEvents();
    } else {
      this._handleMouseEvents();

      if ('ontouchstart' in window) {
        this._handleTouchEvents();
      }
    }
  };

  SignaturePad.prototype.off = function () {
    // Enable panning/zooming when touching canvas element
    this.canvas.style.touchAction = 'auto';
    this.canvas.style.msTouchAction = 'auto';
    this.canvas.removeEventListener('pointerdown', this._handlePointerStart);
    this.canvas.removeEventListener('pointermove', this._handlePointerMove);
    document.removeEventListener('pointerup', this._handlePointerEnd);
    this.canvas.removeEventListener('mousedown', this._handleMouseDown);
    this.canvas.removeEventListener('mousemove', this._handleMouseMove);
    document.removeEventListener('mouseup', this._handleMouseUp);
    this.canvas.removeEventListener('touchstart', this._handleTouchStart);
    this.canvas.removeEventListener('touchmove', this._handleTouchMove);
    this.canvas.removeEventListener('touchend', this._handleTouchEnd);
  };

  SignaturePad.prototype.isEmpty = function () {
    return this._isEmpty;
  };

  SignaturePad.prototype.fromData = function (pointGroups, _a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.clear,
        clear = _c === void 0 ? true : _c;

    if (clear) {
      this.clear();
    }

    this._fromData(pointGroups, this._drawCurve.bind(this), this._drawDot.bind(this));

    this._data = clear ? pointGroups : this._data.concat(pointGroups);
  };

  SignaturePad.prototype.toData = function () {
    return this._data;
  }; // Private methods


  SignaturePad.prototype._strokeBegin = function (event) {
    this.dispatchEvent(new CustomEvent('beginStroke', {
      detail: event
    }));
    var newPointGroup = {
      dotSize: this.dotSize,
      minWidth: this.minWidth,
      maxWidth: this.maxWidth,
      penColor: this.penColor,
      points: []
    };

    this._data.push(newPointGroup);

    this._reset();

    this._strokeUpdate(event);
  };

  SignaturePad.prototype._strokeUpdate = function (event) {
    if (this._data.length === 0) {
      // This can happen if clear() was called while a signature is still in progress,
      // or if there is a race condition between start/update events.
      this._strokeBegin(event);

      return;
    }

    this.dispatchEvent(new CustomEvent('beforeUpdateStroke', {
      detail: event
    }));
    var x = event.clientX;
    var y = event.clientY;
    var pressure = event.pressure !== undefined ? event.pressure : event.force !== undefined ? event.force : 0;

    var point = this._createPoint(x, y, pressure);

    var lastPointGroup = this._data[this._data.length - 1];
    var lastPoints = lastPointGroup.points;
    var lastPoint = lastPoints.length > 0 && lastPoints[lastPoints.length - 1];
    var isLastPointTooClose = lastPoint ? point.distanceTo(lastPoint) <= this.minDistance : false;
    var penColor = lastPointGroup.penColor,
        dotSize = lastPointGroup.dotSize,
        minWidth = lastPointGroup.minWidth,
        maxWidth = lastPointGroup.maxWidth; // Skip this point if it's too close to the previous one

    if (!lastPoint || !(lastPoint && isLastPointTooClose)) {
      var curve = this._addPoint(point);

      if (!lastPoint) {
        this._drawDot(point, {
          penColor: penColor,
          dotSize: dotSize,
          minWidth: minWidth,
          maxWidth: maxWidth
        });
      } else if (curve) {
        this._drawCurve(curve, {
          penColor: penColor,
          dotSize: dotSize,
          minWidth: minWidth,
          maxWidth: maxWidth
        });
      }

      lastPoints.push({
        time: point.time,
        x: point.x,
        y: point.y,
        pressure: point.pressure
      });
    }

    this.dispatchEvent(new CustomEvent('afterUpdateStroke', {
      detail: event
    }));
  };

  SignaturePad.prototype._strokeEnd = function (event) {
    this._strokeUpdate(event);

    this.dispatchEvent(new CustomEvent('endStroke', {
      detail: event
    }));
  };

  SignaturePad.prototype._handlePointerEvents = function () {
    this._drawningStroke = false;
    this.canvas.addEventListener('pointerdown', this._handlePointerStart);
    this.canvas.addEventListener('pointermove', this._handlePointerMove);
    document.addEventListener('pointerup', this._handlePointerEnd);
  };

  SignaturePad.prototype._handleMouseEvents = function () {
    this._drawningStroke = false;
    this.canvas.addEventListener('mousedown', this._handleMouseDown);
    this.canvas.addEventListener('mousemove', this._handleMouseMove);
    document.addEventListener('mouseup', this._handleMouseUp);
  };

  SignaturePad.prototype._handleTouchEvents = function () {
    this.canvas.addEventListener('touchstart', this._handleTouchStart);
    this.canvas.addEventListener('touchmove', this._handleTouchMove);
    this.canvas.addEventListener('touchend', this._handleTouchEnd);
  }; // Called when a new line is started


  SignaturePad.prototype._reset = function () {
    this._lastPoints = [];
    this._lastVelocity = 0;
    this._lastWidth = (this.minWidth + this.maxWidth) / 2;
    this._ctx.fillStyle = this.penColor;
  };

  SignaturePad.prototype._createPoint = function (x, y, pressure) {
    var rect = this.canvas.getBoundingClientRect();
    return new Point(x - rect.left, y - rect.top, pressure, new Date().getTime());
  }; // Add point to _lastPoints array and generate a new curve if there are enough points (i.e. 3)


  SignaturePad.prototype._addPoint = function (point) {
    var _lastPoints = this._lastPoints;

    _lastPoints.push(point);

    if (_lastPoints.length > 2) {
      // To reduce the initial lag make it work with 3 points
      // by copying the first point to the beginning.
      if (_lastPoints.length === 3) {
        _lastPoints.unshift(_lastPoints[0]);
      } // _points array will always have 4 points here.


      var widths = this._calculateCurveWidths(_lastPoints[1], _lastPoints[2]);

      var curve = Bezier.fromPoints(_lastPoints, widths); // Remove the first element from the list, so that there are no more than 4 points at any time.

      _lastPoints.shift();

      return curve;
    }

    return null;
  };

  SignaturePad.prototype._calculateCurveWidths = function (startPoint, endPoint) {
    var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;

    var newWidth = this._strokeWidth(velocity);

    var widths = {
      end: newWidth,
      start: this._lastWidth
    };
    this._lastVelocity = velocity;
    this._lastWidth = newWidth;
    return widths;
  };

  SignaturePad.prototype._strokeWidth = function (velocity) {
    return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
  };

  SignaturePad.prototype._drawCurveSegment = function (x, y, width) {
    var ctx = this._ctx;
    ctx.moveTo(x, y);
    ctx.arc(x, y, width, 0, 2 * Math.PI, false);
    this._isEmpty = false;
  };

  SignaturePad.prototype._drawCurve = function (curve, options) {
    var ctx = this._ctx;
    var widthDelta = curve.endWidth - curve.startWidth; // '2' is just an arbitrary number here. If only lenght is used, then
    // there are gaps between curve segments :/

    var drawSteps = Math.ceil(curve.length()) * 2;
    ctx.beginPath();
    ctx.fillStyle = options.penColor;

    for (var i = 0; i < drawSteps; i += 1) {
      // Calculate the Bezier (x, y) coordinate for this step.
      var t = i / drawSteps;
      var tt = t * t;
      var ttt = tt * t;
      var u = 1 - t;
      var uu = u * u;
      var uuu = uu * u;
      var x = uuu * curve.startPoint.x;
      x += 3 * uu * t * curve.control1.x;
      x += 3 * u * tt * curve.control2.x;
      x += ttt * curve.endPoint.x;
      var y = uuu * curve.startPoint.y;
      y += 3 * uu * t * curve.control1.y;
      y += 3 * u * tt * curve.control2.y;
      y += ttt * curve.endPoint.y;
      var width = Math.min(curve.startWidth + ttt * widthDelta, options.maxWidth);

      this._drawCurveSegment(x, y, width);
    }

    ctx.closePath();
    ctx.fill();
  };

  SignaturePad.prototype._drawDot = function (point, options) {
    var ctx = this._ctx;
    var width = options.dotSize > 0 ? options.dotSize : (options.minWidth + options.maxWidth) / 2;
    ctx.beginPath();

    this._drawCurveSegment(point.x, point.y, width);

    ctx.closePath();
    ctx.fillStyle = options.penColor;
    ctx.fill();
  };

  SignaturePad.prototype._fromData = function (pointGroups, drawCurve, drawDot) {
    for (var _i = 0, pointGroups_1 = pointGroups; _i < pointGroups_1.length; _i++) {
      var group = pointGroups_1[_i];
      var penColor = group.penColor,
          dotSize = group.dotSize,
          minWidth = group.minWidth,
          maxWidth = group.maxWidth,
          points = group.points;

      if (points.length > 1) {
        for (var j = 0; j < points.length; j += 1) {
          var basicPoint = points[j];
          var point = new Point(basicPoint.x, basicPoint.y, basicPoint.pressure, basicPoint.time); // All points in the group have the same color, so it's enough to set
          // penColor just at the beginning.

          this.penColor = penColor;

          if (j === 0) {
            this._reset();
          }

          var curve = this._addPoint(point);

          if (curve) {
            drawCurve(curve, {
              penColor: penColor,
              dotSize: dotSize,
              minWidth: minWidth,
              maxWidth: maxWidth
            });
          }
        }
      } else {
        this._reset();

        drawDot(points[0], {
          penColor: penColor,
          dotSize: dotSize,
          minWidth: minWidth,
          maxWidth: maxWidth
        });
      }
    }
  };

  SignaturePad.prototype._toSVG = function () {
    var pointGroups = this._data;
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    var minX = 0;
    var minY = 0;
    var maxX = this.canvas.width / ratio;
    var maxY = this.canvas.height / ratio;
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', this.canvas.width.toString());
    svg.setAttribute('height', this.canvas.height.toString());

    this._fromData(pointGroups, function (curve, _a) {
      var penColor = _a.penColor;
      var path = document.createElement('path'); // Need to check curve for NaN values, these pop up when drawing
      // lines on the canvas that are not continuous. E.g. Sharp corners
      // or stopping mid-stroke and than continuing without lifting mouse.

      /* eslint-disable no-restricted-globals */

      if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
        var attr = "M ".concat(curve.startPoint.x.toFixed(3), ",").concat(curve.startPoint.y.toFixed(3), " ") + "C ".concat(curve.control1.x.toFixed(3), ",").concat(curve.control1.y.toFixed(3), " ") + "".concat(curve.control2.x.toFixed(3), ",").concat(curve.control2.y.toFixed(3), " ") + "".concat(curve.endPoint.x.toFixed(3), ",").concat(curve.endPoint.y.toFixed(3));
        path.setAttribute('d', attr);
        path.setAttribute('stroke-width', (curve.endWidth * 2.25).toFixed(3));
        path.setAttribute('stroke', penColor);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-linecap', 'round');
        svg.appendChild(path);
      }
      /* eslint-enable no-restricted-globals */

    }, function (point, _a) {
      var penColor = _a.penColor,
          dotSize = _a.dotSize,
          minWidth = _a.minWidth,
          maxWidth = _a.maxWidth;
      var circle = document.createElement('circle');
      var size = dotSize > 0 ? dotSize : (minWidth + maxWidth) / 2;
      circle.setAttribute('r', size.toString());
      circle.setAttribute('cx', point.x.toString());
      circle.setAttribute('cy', point.y.toString());
      circle.setAttribute('fill', penColor);
      svg.appendChild(circle);
    });

    var prefix = 'data:image/svg+xml;base64,';
    var header = '<svg' + ' xmlns="http://www.w3.org/2000/svg"' + ' xmlns:xlink="http://www.w3.org/1999/xlink"' + " viewBox=\"".concat(minX, " ").concat(minY, " ").concat(this.canvas.width, " ").concat(this.canvas.height, "\"") + " width=\"".concat(maxX, "\"") + " height=\"".concat(maxY, "\"") + '>';
    var body = svg.innerHTML; // IE hack for missing innerHTML property on SVGElement

    if (body === undefined) {
      var dummy = document.createElement('dummy');
      var nodes = svg.childNodes;
      dummy.innerHTML = ''; // tslint:disable-next-line: prefer-for-of

      for (var i = 0; i < nodes.length; i += 1) {
        dummy.appendChild(nodes[i].cloneNode(true));
      }

      body = dummy.innerHTML;
    }

    var footer = '</svg>';
    var data = header + body + footer;
    return prefix + btoa(data);
  };

  return SignaturePad;
}(SignatureEventTarget);

export default SignaturePad;
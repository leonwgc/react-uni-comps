/*
 * refer to AlloyFinger & refactor
 */

import { SyntheticEvent } from 'react';
import { passiveIfSupported } from '../dom';

export const supportedGestures = [
  'onMultipointStart',
  'onMultipointEnd',
  'onTap',
  'onDoubleTap',
  'onLongTap',
  'onSingleTap',
  'onRotate',
  'onPinch',
  'onPressMove',
  'onSwipe',
  'onTwoFingerPressMove',
];

const getLen = (v) => {
  return Math.sqrt(v.x * v.x + v.y * v.y);
};

function dot(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y;
}

function getAngle(v1, v2) {
  const mr = getLen(v1) * getLen(v2);
  if (mr === 0) return 0;
  let r = dot(v1, v2) / mr;
  if (r > 1) r = 1;
  return Math.acos(r);
}

function cross(v1, v2) {
  return v1.x * v2.y - v2.x * v1.y;
}

function getRotateAngle(v1, v2) {
  let angle = getAngle(v1, v2);
  if (cross(v1, v2) > 0) {
    angle *= -1;
  }

  return (angle * 180) / Math.PI;
}

const HandlerAdmin = function (el) {
  this.handlers = [];
  this.el = el;
};

HandlerAdmin.prototype.add = function (handler) {
  this.handlers.push(handler);
};

HandlerAdmin.prototype.del = function (handler) {
  if (!handler) this.handlers = [];

  for (let i = this.handlers.length; i >= 0; i--) {
    if (this.handlers[i] === handler) {
      this.handlers.splice(i, 1);
    }
  }
};

HandlerAdmin.prototype.dispatch = function (...args) {
  for (let i = 0, len = this.handlers.length; i < len; i++) {
    const handler = this.handlers[i];
    handler.apply?.(this.el, args);
  }
};

function wrapFunc(el, handler) {
  const handlerAdmin = new HandlerAdmin(el);
  handlerAdmin.add(handler);

  return handlerAdmin;
}

export type Option = Partial<{
  onTouchStart: (evt: SyntheticEvent) => void;
  onTouchMove: (evt: SyntheticEvent) => void;
  onTouchEnd: (evt: SyntheticEvent) => void;
  onTouchCancel: (evt: SyntheticEvent) => void;
  onMultipointStart: (evt: SyntheticEvent) => void;
  onMultipointEnd: (evt: SyntheticEvent) => void;
  onTap: () => void;
  onDoubleTap: () => void;
  onLongTap: () => void;
  onSingleTap: () => void;
  onRotate: (evt: SyntheticEvent & { angle: number }) => void;
  onPinch: (evt: SyntheticEvent & { scale: number }) => void;
  onPressMove: (evt: SyntheticEvent & { deltaX: number; deltaY: number }) => void;
  onSwipe: (evt: SyntheticEvent & { direction: 'left' | 'right' | 'up' | 'down' }) => void;
  onTwoFingerPressMove: () => void;
}>;

/** 手势操作 */
const FingerGesture: (el: Element, option: Option) => void = function (
  el: Element,
  option: Option
) {
  this.element = el;

  this.start = this.start.bind(this);
  this.move = this.move.bind(this);
  this.end = this.end.bind(this);
  this.cancel = this.cancel.bind(this);
  this.element.addEventListener('touchstart', this.start, passiveIfSupported);
  this.element.addEventListener('touchmove', this.move, passiveIfSupported);
  this.element.addEventListener('touchend', this.end, passiveIfSupported);
  this.element.addEventListener('touchcancel', this.cancel, passiveIfSupported);

  this.preV = { x: null, y: null };
  this.pinchStartLen = null;
  this.scale = 1;
  this.isDoubleTap = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const noop = function () {};

  this.rotate = wrapFunc(this.element, option.onRotate || noop);
  /** native events special care prevent from twice invoke  */
  this.touchStart = new HandlerAdmin(this.element);
  this.touchMove = new HandlerAdmin(this.element);
  this.touchEnd = new HandlerAdmin(this.element);
  this.touchCancel = new HandlerAdmin(this.element);

  this.multipointStart = wrapFunc(this.element, option.onMultipointStart || noop);
  this.multipointEnd = wrapFunc(this.element, option.onMultipointEnd || noop);
  this.pinch = wrapFunc(this.element, option.onPinch || noop);
  this.swipe = wrapFunc(this.element, option.onSwipe || noop);
  this.tap = wrapFunc(this.element, option.onTap || noop);
  this.doubleTap = wrapFunc(this.element, option.onDoubleTap || noop);
  this.longTap = wrapFunc(this.element, option.onLongTap || noop);
  this.singleTap = wrapFunc(this.element, option.onSingleTap || noop);
  this.pressMove = wrapFunc(this.element, option.onPressMove || noop);
  this.twoFingerPressMove = wrapFunc(this.element, option.onTwoFingerPressMove || noop);

  this._cancelAllHandler = this.cancelAll.bind(this);

  window.addEventListener('scroll', this._cancelAllHandler);

  this.delta = null;
  this.last = null;
  this.now = null;
  this.tapTimeout = null;
  this.singleTapTimeout = null;
  this.longTapTimeout = null;
  this.swipeTimeout = null;
  this.x1 = this.x2 = this.y1 = this.y2 = null;
  this.preTapPosition = { x: null, y: null };
};

FingerGesture.prototype = {
  start: function (evt) {
    if (!evt.touches) return;
    this.now = Date.now();
    this.x1 = evt.touches[0].pageX;
    this.y1 = evt.touches[0].pageY;
    this.delta = this.now - (this.last || this.now);
    this.touchStart.dispatch(evt, this.element);
    if (this.preTapPosition.x !== null) {
      this.isDoubleTap =
        this.delta > 0 &&
        this.delta <= 250 &&
        Math.abs(this.preTapPosition.x - this.x1) < 30 &&
        Math.abs(this.preTapPosition.y - this.y1) < 30;
      if (this.isDoubleTap) clearTimeout(this.singleTapTimeout);
    }
    this.preTapPosition.x = this.x1;
    this.preTapPosition.y = this.y1;
    this.last = this.now;
    const preV = this.preV,
      len = evt.touches.length;
    if (len > 1) {
      this._cancelLongTap();
      this._cancelSingleTap();
      const v = { x: evt.touches[1].pageX - this.x1, y: evt.touches[1].pageY - this.y1 };
      preV.x = v.x;
      preV.y = v.y;
      this.pinchStartLen = getLen(preV);
      this.multipointStart.dispatch(evt, this.element);
    }
    this._preventTap = false;
    this.longTapTimeout = setTimeout(
      function () {
        this.longTap.dispatch(evt, this.element);
        this._preventTap = true;
      }.bind(this),
      750
    );
  },
  move: function (evt) {
    if (!evt.touches) return;
    const preV = this.preV,
      len = evt.touches.length,
      currentX = evt.touches[0].pageX,
      currentY = evt.touches[0].pageY;
    this.isDoubleTap = false;
    if (len > 1) {
      const sCurrentX = evt.touches[1].pageX,
        sCurrentY = evt.touches[1].pageY;
      const v = { x: evt.touches[1].pageX - currentX, y: evt.touches[1].pageY - currentY };

      if (preV.x !== null) {
        if (this.pinchStartLen > 0) {
          evt.scale = getLen(v) / this.pinchStartLen;
          this.pinch.dispatch(evt, this.element);
        }

        evt.angle = getRotateAngle(v, preV);
        this.rotate.dispatch(evt, this.element);
      }
      preV.x = v.x;
      preV.y = v.y;

      if (this.x2 !== null && this.sx2 !== null) {
        evt.deltaX = (currentX - this.x2 + sCurrentX - this.sx2) / 2;
        evt.deltaY = (currentY - this.y2 + sCurrentY - this.sy2) / 2;
      } else {
        evt.deltaX = 0;
        evt.deltaY = 0;
      }
      this.twoFingerPressMove.dispatch(evt, this.element);

      this.sx2 = sCurrentX;
      this.sy2 = sCurrentY;
    } else {
      if (this.x2 !== null) {
        evt.deltaX = currentX - this.x2;
        evt.deltaY = currentY - this.y2;

        //move事件中添加对当前触摸点到初始触摸点的判断，
        //如果曾经大于过某个距离(比如10),就认为是移动到某个地方又移回来，应该不再触发tap事件才对。
        const movedX = Math.abs(this.x1 - this.x2),
          movedY = Math.abs(this.y1 - this.y2);

        if (movedX > 10 || movedY > 10) {
          this._preventTap = true;
        }
      } else {
        evt.deltaX = 0;
        evt.deltaY = 0;
      }

      this.pressMove.dispatch(evt, this.element);
    }

    this.touchMove.dispatch(evt, this.element);

    this._cancelLongTap();
    this.x2 = currentX;
    this.y2 = currentY;

    if (len > 1) {
      evt.preventDefault();
    }
  },
  end: function (evt) {
    if (!evt.changedTouches) return;
    this._cancelLongTap();
    const self = this;
    if (evt.touches.length < 2) {
      this.multipointEnd.dispatch(evt, this.element);
      this.sx2 = this.sy2 = null;
    }

    //swipe
    if (
      (this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
      (this.y2 && Math.abs(this.y1 - this.y2) > 30)
    ) {
      evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
      this.swipeTimeout = setTimeout(function () {
        self.swipe.dispatch(evt, self.element);
      }, 0);
    } else {
      this.tapTimeout = setTimeout(function () {
        if (!self._preventTap) {
          self.tap.dispatch(evt, self.element);
        }
        // trigger double tap immediately
        if (self.isDoubleTap) {
          self.doubleTap.dispatch(evt, self.element);
          self.isDoubleTap = false;
        }
      }, 0);

      if (!self.isDoubleTap) {
        self.singleTapTimeout = setTimeout(function () {
          self.singleTap.dispatch(evt, self.element);
        }, 250);
      }
    }

    this.touchEnd.dispatch(evt, this.element);

    this.preV.x = 0;
    this.preV.y = 0;
    this.scale = 1;
    this.pinchStartLen = null;
    this.x1 = this.x2 = this.y1 = this.y2 = null;
  },
  cancelAll: function () {
    this._preventTap = true;
    clearTimeout(this.singleTapTimeout);
    clearTimeout(this.tapTimeout);
    clearTimeout(this.longTapTimeout);
    clearTimeout(this.swipeTimeout);
  },
  cancel: function (evt) {
    this.cancelAll();
    this.touchCancel.dispatch(evt, this.element);
  },
  _cancelLongTap: function () {
    clearTimeout(this.longTapTimeout);
  },
  _cancelSingleTap: function () {
    clearTimeout(this.singleTapTimeout);
  },
  _swipeDirection: function (x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
      ? x1 - x2 > 0
        ? 'left'
        : 'right'
      : y1 - y2 > 0
      ? 'up'
      : 'down';
  },

  on: function (evt, handler) {
    if (this[evt]) {
      this[evt].add(handler);
    }
  },

  off: function (evt, handler) {
    if (this[evt]) {
      this[evt].del(handler);
    }
  },

  destroy: function () {
    if (this.singleTapTimeout) clearTimeout(this.singleTapTimeout);
    if (this.tapTimeout) clearTimeout(this.tapTimeout);
    if (this.longTapTimeout) clearTimeout(this.longTapTimeout);
    if (this.swipeTimeout) clearTimeout(this.swipeTimeout);

    this.element.removeEventListener('touchstart', this.start, passiveIfSupported);
    this.element.removeEventListener('touchmove', this.move, passiveIfSupported);
    this.element.removeEventListener('touchend', this.end, passiveIfSupported);
    this.element.removeEventListener('touchcancel', this.cancel, passiveIfSupported);

    this.rotate.del();
    this.touchStart.del();
    this.multipointStart.del();
    this.multipointEnd.del();
    this.pinch.del();
    this.swipe.del();
    this.tap.del();
    this.doubleTap.del();
    this.longTap.del();
    this.singleTap.del();
    this.pressMove.del();
    this.twoFingerPressMove.del();
    this.touchMove.del();
    this.touchEnd.del();
    this.touchCancel.del();

    this.preV =
      this.pinchStartLen =
      this.scale =
      this.isDoubleTap =
      this.delta =
      this.last =
      this.now =
      this.tapTimeout =
      this.singleTapTimeout =
      this.longTapTimeout =
      this.swipeTimeout =
      this.x1 =
      this.x2 =
      this.y1 =
      this.y2 =
      this.preTapPosition =
      this.rotate =
      this.touchStart =
      this.multipointStart =
      this.multipointEnd =
      this.pinch =
      this.swipe =
      this.tap =
      this.doubleTap =
      this.longTap =
      this.singleTap =
      this.pressMove =
      this.touchMove =
      this.touchEnd =
      this.touchCancel =
      this.twoFingerPressMove =
        null;

    window.removeEventListener('scroll', this._cancelAllHandler);
    return null;
  },
};

export default FingerGesture;

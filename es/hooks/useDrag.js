// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect } from 'react';

var _isTouch = typeof window !== 'undefined' && window.ontouchstart !== undefined;

var getPosition = function getPosition(el) {
  var left = 0;
  var top = 0;

  while (el) {
    left += el.offsetLeft;
    top += el.offsetTop;
    el = el.offsetParent;
  }

  return {
    left: left,
    top: top
  };
};

var useDragMove = function useDragMove(elRef, boundRef, onStart, onEnd) {
  useEffect(function () {
    if (elRef.current) {
      var ox_1, oy_1;
      var ol_1, ot_1;
      var isMoving_1 = false;
      var elRect_1 = elRef.current.getBoundingClientRect();
      var boundRect_1 = null;

      if (boundRef) {
        boundRect_1 = boundRef.current.getBoundingClientRect();
      }

      var setPosition_1 = function setPosition_1(left, top, bottom, right) {
        if (left != undefined) {
          elRef.current.style.left = left + 'px';
        }

        if (top != undefined) {
          elRef.current.style.top = top + 'px';
        }

        if (bottom != undefined) {
          elRef.current.style.top = 'unset';
          elRef.current.style.bottom = bottom + 'px';
        }

        if (right != undefined) {
          elRef.current.style.left = 'unset';
          elRef.current.style.right = right + 'px';
        }
      };

      var moveHanlder_1 = function moveHanlder_1(e) {
        if (!isMoving_1) return;

        if (e.touches) {
          e = e.touches[0];
        }

        var left = ol_1 + e.clientX - ox_1;
        var top = ot_1 + e.clientY - oy_1;
        var bottom, right;

        if (boundRef) {
          if (left <= 0) {
            left = 0;
          }

          if (left + elRect_1.width > boundRect_1.width) {
            right = 0;
          }

          if (top <= 0) {
            top = 0;
          }

          if (top + elRect_1.height > boundRect_1.height) {
            bottom = 0;
          }
        }

        setPosition_1(left, top, bottom, right);
      }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


      elRef.current.addEventListener(_isTouch ? 'touchstart' : 'mousedown', function (e) {
        e.stopPropagation();

        if (typeof e.cancelable !== 'boolean' || e.cancelable) {
          e.preventDefault();
        }

        onStart === null || onStart === void 0 ? void 0 : onStart(e, getPosition(e.target));

        if (!isMoving_1) {
          isMoving_1 = true;
        }

        if (e.touches) {
          e = e.touches[0];
        }

        ox_1 = e.clientX;
        oy_1 = e.clientY;
        ol_1 = elRef.current.offsetLeft;
        ot_1 = elRef.current.offsetTop;
        document.addEventListener(_isTouch ? 'touchmove' : 'mousemove', moveHanlder_1);
      });

      var touchEndHandler = function touchEndHandler(e) {
        if (isMoving_1) {
          isMoving_1 = false;
        }

        document.removeEventListener(_isTouch ? 'touchmove' : 'mousemove', moveHanlder_1);

        if (typeof onEnd === 'function' && elRef.current === e.target) {
          onEnd(e, getPosition(e.target));
        }
      };

      document.addEventListener(_isTouch ? 'touchend' : 'mouseup', touchEndHandler);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
};

export default useDragMove;
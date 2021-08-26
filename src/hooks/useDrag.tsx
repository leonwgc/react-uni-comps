// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, MutableRefObject } from 'react';
const _isTouch = typeof window !== 'undefined' && window.ontouchstart !== undefined;

const getPosition = (el: HTMLElement) => {
  let left = 0;
  let top = 0;

  while (el) {
    left += el.offsetLeft;
    top += el.offsetTop;
    el = el.offsetParent as HTMLElement;
  }

  return { left, top };
};

export type Position = {
  left: number;
  top: number;
};

const useDragMove = (
  elRef: MutableRefObject<HTMLElement>,
  boundRef?: MutableRefObject<HTMLElement>,
  onStart?: (e: MouseEvent | TouchEvent, position: Position) => void,
  onEnd?: (e: MouseEvent | TouchEvent, position: Position) => void
): void => {
  useEffect(() => {
    if (elRef.current) {
      let ox, oy;
      let ol, ot;
      let isMoving = false;
      const elRect = elRef.current.getBoundingClientRect();

      let boundRect = null;
      if (boundRef) {
        boundRect = boundRef.current.getBoundingClientRect();
      }

      const setPosition = (left, top, bottom, right) => {
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

      const moveHanlder = (e) => {
        if (!isMoving) return;

        if (e.touches) {
          e = e.touches[0];
        }

        let left = ol + e.clientX - ox;
        let top = ot + e.clientY - oy;

        let bottom, right;

        if (boundRef) {
          if (left <= 0) {
            left = 0;
          }
          if (left + elRect.width > boundRect.width) {
            right = 0;
          }

          if (top <= 0) {
            top = 0;
          }

          if (top + elRect.height > boundRect.height) {
            bottom = 0;
          }
        }

        setPosition(left, top, bottom, right);
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      elRef.current.addEventListener(_isTouch ? 'touchstart' : 'mousedown', (e: any) => {
        e.stopPropagation();
        if (typeof e.cancelable !== 'boolean' || e.cancelable) {
          e.preventDefault();
        }
        onStart?.(e, getPosition(e.target));
        if (!isMoving) {
          isMoving = true;
        }
        if (e.touches) {
          e = e.touches[0];
        }
        ox = e.clientX;
        oy = e.clientY;
        ol = elRef.current.offsetLeft;
        ot = elRef.current.offsetTop;

        document.addEventListener(_isTouch ? 'touchmove' : 'mousemove', moveHanlder);
      });

      const touchEndHandler = (e) => {
        if (isMoving) {
          isMoving = false;
        }
        document.removeEventListener(_isTouch ? 'touchmove' : 'mousemove', moveHanlder);
        if (typeof onEnd === 'function' && elRef.current === e.target) {
          onEnd(e, getPosition(e.target));
        }
      };

      document.addEventListener(_isTouch ? 'touchend' : 'mouseup', touchEndHandler);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useDragMove;

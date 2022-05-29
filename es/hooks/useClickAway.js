import { useEffect } from 'react';
import { getTargetElement } from '../helper';
import useLatest from './useLatest';
/**
 * 监听点击元素外部事件
 *
 * @export
 * @param {(TargetElementType | TargetElementType[])} target 监听dom对象
 * @param {(e) => void} [onClickAway] 点击外部事件触发回调
 * @param {string} [eventName='click'] 监听事件类型
 */

export default function useClickAway(
/** 监听dom对象 */
target,
/** 点击外部事件触发回调 */
onClickAway,
/** 监听事件类型 */
eventName) {
  if (eventName === void 0) {
    eventName = 'click';
  }

  var onClickAwayRef = useLatest(onClickAway);
  var eventNameRef = useLatest(eventName);
  var targetRef = useLatest(target);
  useEffect(function () {
    var eventName = eventNameRef.current;

    var handler = function handler(e) {
      var _a;

      var targets = Array.isArray(targetRef.current) ? targetRef.current : [targetRef.current];

      if (targets.some(function (targetItem) {
        var _a;

        var targetElement = getTargetElement(targetItem);
        return !targetElement || ((_a = targetElement.contains) === null || _a === void 0 ? void 0 : _a.call(targetElement, e.target));
      })) {
        return;
      }

      (_a = onClickAwayRef.current) === null || _a === void 0 ? void 0 : _a.call(onClickAwayRef, e);
    };

    document.addEventListener(eventName, handler);
    return function () {
      document.removeEventListener(eventName, handler);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
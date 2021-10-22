import { getComputedStyle, getNodeName } from './utils';
import { getOffsetTop } from './getOffsetParent';
/** popup距离trigger el的距离 */

export var MARGIN = 12;
/**
 * 根据选择器所选元素、modal 的长宽、用户定义的 placement 和 offset，获取 modal 的位置
 * Calculate the modal's position based on its anchor element, user-defined placement and offset
 * @param {HTMLElement} modalEl
 * @param {Element} anchorEl
 * @param {Element} parentEl
 * @param {string} placement
 * @param {object} customOffset
 */

export var getModalStyle = function getModalStyle(modalEl, anchorEl, parentEl, scrollContainer, placement, customOffset) {
  if (placement === void 0) {
    placement = 'bottom';
  }

  var modalPos = modalEl.getBoundingClientRect();
  var anchorPos = anchorEl.getBoundingClientRect();
  var parentPos = parentEl.getBoundingClientRect(); // const { scrollTop } = scrollContainer;

  var isParentBody = getNodeName(parentEl) === 'body';
  var isAnchorFixed = getComputedStyle(anchorEl).position === 'fixed'; // const anchorOffsetTop = getOffsetTop(anchorEl);
  // backup
  // const scrollY = isAnchorFixed
  //   ? anchorPos.top
  //   : isParentBody
  //   ? anchorPos.top + scrollTop
  //   : anchorOffsetTop;

  var anchorTop = isAnchorFixed ? anchorPos.top : isParentBody ? anchorPos.top + window.pageYOffset : getOffsetTop(anchorEl);
  /* The distance between the top of the offsetParent and the top of the anchor.
   *
   * We don't simply use anchorEl.offsetTop but the below code instead due to the following reason:
   * for the cases with no mask, the anchorEl's should be positioned relative to the body rather than
   * its real offsetParent.
   */

  var top = anchorTop;
  var bottom = anchorPos.height + anchorTop;
  var left = anchorPos.left - (isAnchorFixed ? 0 : parentPos.left);
  var width = anchorPos.width,
      height = anchorPos.height;
  var transform = {
    'top': {
      // modal放到内容的上面
      top: top - modalPos.height - MARGIN,
      left: left + width / 2 - modalPos.width / 2
    },
    'bottom': {
      // modal放到内容的下面
      top: bottom + MARGIN,
      left: left + width / 2 - modalPos.width / 2
    },
    'left': {
      // modal放到内容的左边
      top: top + height / 2 - modalPos.height / 2,
      left: left - modalPos.width - MARGIN
    },
    'right': {
      // modal放到内容的右边
      top: top + height / 2 - modalPos.height / 2,
      left: left + width + MARGIN
    },
    'top-right': {
      // modal的bottom-border紧贴内容的top-border，right-borders水平对齐
      top: top - modalPos.height - MARGIN,
      left: left + width - modalPos.width
    },
    'top-left': {
      // modal的bottom-border紧贴内容的top-border，left-borders水平对齐
      top: top - modalPos.height - MARGIN,
      left: left
    },
    'bottom-right': {
      // modal的top-border紧贴内容的bottom-border，right-borders水平对齐
      top: bottom + MARGIN,
      left: left + width - modalPos.width
    },
    'bottom-left': {
      // modal的top-border紧贴内容的bottom-border，left-borders水平对齐
      top: bottom + MARGIN,
      left: left
    },
    'right-top': {
      // modal的left-border紧贴内容的right-border，top-borders水平对齐
      top: top,
      left: left + width + MARGIN
    },
    'left-top': {
      // modal的right-border紧贴内容的left-border，top-borders水平对齐
      top: top,
      left: left - modalPos.width - MARGIN
    },
    'right-bottom': {
      // modal的left-border紧贴内容的right-border，bottom-borders水平对齐
      top: bottom - modalPos.height,
      left: left + width + MARGIN
    },
    'left-bottom': {
      // modal的right-border紧贴内容的left-border，bottom-borders水平对齐
      top: bottom - modalPos.height,
      left: left - modalPos.width - MARGIN
    }
  };
  var offset = {
    x: customOffset.x || 0,
    y: customOffset.y || 0
  };
  var position = transform[placement];
  return {
    position: isAnchorFixed ? 'fixed' : 'absolute',
    top: Math.max(position.top + offset.y, 0),
    left: Math.max(position.left + offset.x, 0)
  };
};
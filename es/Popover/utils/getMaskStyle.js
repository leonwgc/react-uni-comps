import { getDocumentElement } from './utils';
export var getMaskStyle = function getMaskStyle(anchorEl) {
  var scrollContainer = getDocumentElement(anchorEl);
  var scrollWidth = scrollContainer.scrollWidth,
      scrollHeight = scrollContainer.scrollHeight,
      scrollTop = scrollContainer.scrollTop; // prevent scrolling

  scrollContainer.style.overflow = 'hidden';
  var anchorPos = anchorEl.getBoundingClientRect();
  var height = anchorPos.height,
      width = anchorPos.width,
      left = anchorPos.left;
  var top = anchorPos.top + scrollTop;
  return {
    width: scrollWidth,
    height: scrollHeight,
    borderTopWidth: Math.max(top, 0),
    borderBottomWidth: Math.max(scrollHeight - height - top, 0),
    borderRightWidth: Math.max(scrollWidth - width - left, 0),
    borderLeftWidth: Math.max(left, 0)
  };
};
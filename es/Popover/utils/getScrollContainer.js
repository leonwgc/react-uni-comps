import { getDocumentElement, getParentNode, getComputedStyle, getNodeName, isHTMLElement } from './utils';
export var getScrollContainer = function getScrollContainer(node, callback) {
  var currentNode = getParentNode(node);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    var overflowY = css.overflowY;
    var isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';
    callback === null || callback === void 0 ? void 0 : callback(currentNode);

    if (isScrollable && currentNode.scrollHeight > currentNode.clientHeight) {
      return currentNode;
    }

    currentNode = currentNode.parentNode;
  }

  return getDocumentElement(node);
};
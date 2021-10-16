import ReactDOM from 'react-dom';
var flexGapSupported;
export var detectFlexGapSupported = function detectFlexGapSupported() {
  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  }

  if (typeof window === 'undefined') {
    return false;
  }

  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));
  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1;
  document.body.removeChild(flex);
  return flexGapSupported;
};
export var offset = function offset(el) {
  var top = 0;
  var left = 0;

  while (el) {
    top += el.offsetTop;
    left += el.offsetLeft;
    el = el.offsetParent;
  }

  return {
    top: top,
    left: left
  };
};
export var isBrowser = !!(typeof window !== 'undefined' && window);
export var isMobile = isBrowser && /(iPhone|iPad|iPod|iOS|android)/i.test(navigator.userAgent);
/**
 *
 * 判断是否支持某个css属性
 * @param {string} prop
 * @return {*}  {boolean}
 */

export var isSupportStyleProp = function isSupportStyleProp(prop) {
  return prop && prop in document.documentElement.style;
};
/**
 * 判断是否支持某个css属性的值，比如position: sticky
 *
 * @param {*} prop
 * @param {*} value
 * @return {*}
 */

export var isSupportStyleValue = function isSupportStyleValue(prop, value) {
  if (isSupportStyleProp(prop)) {
    var d = document.createElement('div');
    d.style[prop] = value;
    return !!d.style[prop];
  }

  return false;
};
var _passiveIfSupported = false;

try {
  isBrowser && window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
    get: function get() {
      _passiveIfSupported = {
        passive: true
      };
    }
  }));
} catch (err) {}

export var passiveIfSupported = _passiveIfSupported;
/**
 * render element into doc & return dispose func
 *
 * @param {ReactElement} element
 * @return {*}  {(() => void)}
 */

export var renderElement = function renderElement(element) {
  var container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(element, container);
  return function () {
    ReactDOM.unmountComponentAtNode(container);
    container.parentNode.removeChild(container);
  };
};
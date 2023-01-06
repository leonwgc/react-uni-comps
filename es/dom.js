import ReactDOM from 'react-dom';
/** 是否是浏览器 */

export var isBrowser = !!(typeof window !== 'undefined' && window);
/** 是否是移动端 */

export var isMobile = isBrowser && /(iPhone|iPad|iPod|iOS|android)/i.test(navigator.userAgent);
/**
 *
 * 是否支持某个css属性
 * @param {string} prop
 * @return {*}  {boolean}
 */

export var isCssPropExist = function isCssPropExist(prop) {
  return isBrowser && prop && prop in document.documentElement.style;
};
/**
 * 是否支持某个css属性的值，比如position: sticky
 *
 * @param {*} prop
 * @param {*} value
 * @return {*}
 */

export var isCssValueExist = function isCssValueExist(prop, value) {
  if (isCssPropExist(prop)) {
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
/** 是否支持passive事件选项 */


export var isPassiveSupported = isBrowser && _passiveIfSupported;
/**
 *  container内部元素卸载前执行过渡动画, 配合renderElement使用(Notify,Toast,AlertDialog)
 *
 * @param {HTMLElement} container
 * @param {string} selector
 * @param {number} timeout
 * @return {*}  {Promise<void>}
 */

export var beforeDisposeGen = function beforeDisposeGen(container, selector, timeout) {
  return function () {
    return new Promise(function (dispose) {
      var el = container.querySelector(selector);

      if (el) {
        el.classList.remove('to');
        el.classList.add('from');
      }

      setTimeout(dispose, timeout);
    });
  };
};
/**
 * 自定义渲染元素到容器
 *
 * @param {ReactElement} element
 * @param {HTMLElement} [container]
 * @return {Dispose}  dispose
 */

export var renderElement = function renderElement(element, container) {
  var dom = container || document.createElement('div');
  document.body.appendChild(dom);
  ReactDOM.render(element, dom);

  var dispose = function dispose() {
    ReactDOM.unmountComponentAtNode(dom);

    if (dom && dom.parentNode) {
      dom.parentNode.removeChild(dom);
    }
  };

  return function (beforeDispose) {
    if (typeof beforeDispose === 'function') {
      // play transition here before unmount
      beforeDispose().then(dispose);
    } else {
      dispose();
    }
  };
};
var cssRegex = /\.css$/i;
var resourceRegex = /\.(css|js)$/i;
var resourceLoadedList = new Set();
/**
 * 动态加载 js/css文件
 *
 * @param {string} url
 * @param {*} [attrs={}] 额外的属性设置
 * @return {*}  {Promise<void>}
 */

export var loadResource = function loadResource(url, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  if (resourceRegex.test(url)) {
    if (!resourceLoadedList.has(url)) {
      resourceLoadedList.add(url);
      return new Promise(function (resolve, reject) {
        var el;
        var isCss = cssRegex.test(url);

        if (isCss) {
          el = document.createElement('link');
          Object.keys(attrs).map(function (key) {
            el.setAttribute(key, attrs[key]);
          });
          el.rel = 'stylesheet';
          el.href = url;
        } else {
          el = document.createElement('script');
          el.setAttribute('data-namespace', url);
          Object.keys(attrs).map(function (key) {
            el.setAttribute(key, attrs[key]);
          });
          el.src = url;
        }

        el.onload = resolve;
        el.onerror = reject;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(el);
      });
    } else {
      return Promise.resolve();
    }
  } else {
    return Promise.reject('请输入js/css文件地址');
  }
};
/** 是否支持触屏 */

export var isTouch = typeof window !== 'undefined' && window.ontouchstart !== undefined;
export var isCssVarSupported = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports('--a', '0');
var overflowScrollReg = /scroll|auto|overlay/i;
var ELEMENT_NODE_TYPE = 1;

function isElement(node) {
  return node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === ELEMENT_NODE_TYPE;
}
/**
 *
 * 获取最近的滚动父元素，如果没有，则返回root, root默认是window
 *
 * @export
 * @param {Element} el
 * @param {(ScrollElement | null | undefined)} [root=window]
 * @return {*}
 */


export function getScrollParent(el, root) {
  if (root === void 0) {
    root = window;
  }

  var node = el;

  while (node && node !== root && isElement(node)) {
    var overflowY = window.getComputedStyle(node).overflowY;

    if (overflowScrollReg.test(overflowY)) {
      return node;
    }

    node = node.parentNode;
  }

  return root;
}
/**
 * get scroll parent's scrollTop
 *
 * @param {Element} el
 * @return {*}  {number}
 */

export var getScrollTop = function getScrollTop(el) {
  var scrollParent = getScrollParent(el);

  if (scrollParent === window) {
    return window.pageYOffset;
  }

  return scrollParent.scrollTop;
};
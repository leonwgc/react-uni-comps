import ReactDOM from 'react-dom';
var flexGapSupported;
/**
 * 检查浏览器支持gap
 *
 * @return {*}  {boolean}
 */

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
/**
 * 取得元素偏移值
 *
 * @param {(HTMLElement | null)} el
 * @return {*}  {{ top: number; left: number }}
 */

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
/** 是否是浏览器 */

export var isBrowser = !!(typeof window !== 'undefined' && window);
/** 是否是移动端 */

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
/** 是否支持passive事件选项 */


export var passiveIfSupported = _passiveIfSupported;
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
 * @return {*}  {Promise<void>}
 */

export var loadResource = function loadResource(url) {
  if (resourceRegex.test(url) && !resourceLoadedList.has(url)) {
    resourceLoadedList.add(url);
    return new Promise(function (resolve) {
      var el;
      var isCss = cssRegex.test(url);

      if (isCss) {
        el = document.createElement('link');
        el.rel = 'stylesheet';
        el.href = url;
      } else {
        el = document.createElement('script');
        el.setAttribute('data-namespace', url);
        el.src = url;
      }

      el.onload = resolve;

      if (isCss) {
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(el);
      } else {
        document.body.appendChild(el);
      }
    });
  } else {
    return Promise.reject('请输入js/css文件地址');
  }
};
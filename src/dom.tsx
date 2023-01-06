import { ReactElement } from 'react';
import ReactDOM from 'react-dom';

/** 是否是浏览器 */
export const isBrowser = !!(typeof window !== 'undefined' && window);

/** 是否是移动端 */
export const isMobile = isBrowser && /(iPhone|iPad|iPod|iOS|android)/i.test(navigator.userAgent);

/**
 *
 * 是否支持某个css属性
 * @param {string} prop
 * @return {*}  {boolean}
 */
export const isCssPropExist = (prop: string): boolean => {
  return isBrowser && prop && prop in document.documentElement.style;
};

/**
 * 是否支持某个css属性的值，比如position: sticky
 *
 * @param {*} prop
 * @param {*} value
 * @return {*}
 */
export const isCssValueExist = (prop: string, value: string): boolean => {
  if (isCssPropExist(prop)) {
    const d = document.createElement('div');
    d.style[prop] = value;

    return !!d.style[prop];
  }

  return false;
};

let _passiveIfSupported: boolean | { passive: boolean } = false;

try {
  isBrowser &&
    window.addEventListener(
      'test',
      null,
      Object.defineProperty({}, 'passive', {
        get: function () {
          _passiveIfSupported = { passive: true };
        },
      })
    );
} catch (err) {}

/** 是否支持passive事件选项 */
export const isPassiveSupported = isBrowser && _passiveIfSupported;

export type Dispose = (beforeDispose?: () => Promise<void>) => void;

/**
 *  container内部元素卸载前执行过渡动画, 配合renderElement使用(Notify,Toast,AlertDialog)
 *
 * @param {HTMLElement} container
 * @param {string} selector
 * @param {number} timeout
 * @return {*}  {Promise<void>}
 */
export const beforeDisposeGen =
  (container: HTMLElement, selector: string, timeout: number): (() => Promise<void>) =>
  () => {
    return new Promise((dispose) => {
      const el = container.querySelector(selector);
      if (el) {
        el.classList.remove('to');
        el.classList.add('from');
      }

      setTimeout(dispose, timeout);
    });
  };

/**
 * 自定义渲染元素到容器
 *
 * @param {ReactElement} element
 * @param {HTMLElement} [container]
 * @return {Dispose}  dispose
 */
export const renderElement: (element: ReactElement, container?: HTMLElement) => Dispose = (
  element,
  container
) => {
  const dom = container || document.createElement('div');
  document.body.appendChild(dom);

  ReactDOM.render(element, dom);

  const dispose = () => {
    ReactDOM.unmountComponentAtNode(dom);
    if (dom && dom.parentNode) {
      dom.parentNode.removeChild(dom);
    }
  };

  return (beforeDispose) => {
    if (typeof beforeDispose === 'function') {
      // play transition here before unmount
      beforeDispose().then(dispose);
    } else {
      dispose();
    }
  };
};

const cssRegex = /\.css$/i;
const resourceRegex = /\.(css|js)$/i;
const resourceLoadedList = new Set<string>();
/**
 * 动态加载 js/css文件
 *
 * @param {string} url
 * @param {*} [attrs={}] 额外的属性设置
 * @return {*}  {Promise<void>}
 */
export const loadResource = (url: string, attrs = {}): Promise<void> => {
  if (resourceRegex.test(url)) {
    if (!resourceLoadedList.has(url)) {
      resourceLoadedList.add(url);
      return new Promise((resolve, reject) => {
        let el;
        const isCss = cssRegex.test(url);
        if (isCss) {
          el = document.createElement('link');
          Object.keys(attrs).map((key) => {
            el.setAttribute(key, attrs[key]);
          });
          el.rel = 'stylesheet';
          el.href = url;
        } else {
          el = document.createElement('script');
          el.setAttribute('data-namespace', url);
          Object.keys(attrs).map((key) => {
            el.setAttribute(key, attrs[key]);
          });
          el.src = url;
        }

        el.onload = resolve;
        el.onerror = reject;

        const head = document.getElementsByTagName('head')[0];
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
export const isTouch = typeof window !== 'undefined' && window.ontouchstart !== undefined;

export const isCssVarSupported =
  isBrowser && window.CSS && window.CSS.supports && window.CSS.supports('--a', '0');

type ScrollElement = Element | Window;

const overflowScrollReg = /scroll|auto|overlay/i;
const ELEMENT_NODE_TYPE = 1;

function isElement(node: Element) {
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
export function getScrollParent(el: Element, root: ScrollElement | null | undefined = window) {
  let node = el;

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode as Element;
  }

  return root;
}

/**
 * get scroll parent's scrollTop
 *
 * @param {Element} el
 * @return {*}  {number}
 */
export const getScrollTop = (el: Element): number => {
  const scrollParent = getScrollParent(el);

  if (scrollParent === window) {
    return window.pageYOffset;
  }
  return (scrollParent as Element).scrollTop;
};

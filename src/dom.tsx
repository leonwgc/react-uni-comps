import { ReactElement } from 'react';
import ReactDOM from 'react-dom';

let flexGapSupported: boolean;

/**
 * 检查浏览器支持gap
 *
 * @return {*}  {boolean}
 */
export const detectFlexGapSupported = (): boolean => {
  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  }

  if (typeof window === 'undefined') {
    return false;
  }

  const flex = document.createElement('div');
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
export const offset = (el: HTMLElement | null): { top: number; left: number } => {
  let top = 0;
  let left = 0;
  while (el) {
    top += el.offsetTop;
    left += el.offsetLeft;
    el = el.offsetParent as HTMLElement;
  }

  return { top, left };
};
/** 是否是浏览器 */
export const isBrowser = !!(typeof window !== 'undefined' && window);

/** 是否是移动端 */
export const isMobile = isBrowser && /(iPhone|iPad|iPod|iOS|android)/i.test(navigator.userAgent);

/**
 *
 * 判断是否支持某个css属性
 * @param {string} prop
 * @return {*}  {boolean}
 */
export const isSupportStyleProp = (prop: string): boolean => {
  return prop && prop in document.documentElement.style;
};
/**
 * 判断是否支持某个css属性的值，比如position: sticky
 *
 * @param {*} prop
 * @param {*} value
 * @return {*}
 */
export const isSupportStyleValue = (prop: string, value: string): boolean => {
  if (isSupportStyleProp(prop)) {
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
export const passiveIfSupported = _passiveIfSupported;

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

        if (isCss) {
          const head = document.getElementsByTagName('head')[0];
          head.appendChild(el);
        } else {
          document.body.appendChild(el);
        }
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

/** get el scrollTop */
export const getScrollTop = (ele: HTMLElement | Window): number => {
  if (ele === window) {
    return window.pageYOffset;
  }
  return (ele as HTMLElement).scrollTop;
};

export const isCssVarSupported =
  isBrowser && window.CSS && window.CSS.supports && window.CSS.supports('--a', '0');

let flexGapSupported: boolean;

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

export const isBrowser = !!(typeof window !== 'undefined' && window);

export const isMobile = (): boolean =>
  isBrowser && /(iPhone|iPad|iPod|iOS|android)/i.test(navigator.userAgent);

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

export const passiveIfSupported = _passiveIfSupported;

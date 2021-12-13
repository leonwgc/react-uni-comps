import { ReactElement } from 'react';
/**
 * 检查浏览器支持gap
 *
 * @return {*}  {boolean}
 */
export declare const detectFlexGapSupported: () => boolean;
/**
 * 取得元素偏移值
 *
 * @param {(HTMLElement | null)} el
 * @return {*}  {{ top: number; left: number }}
 */
export declare const offset: (el: HTMLElement | null) => {
    top: number;
    left: number;
};
/** 是否是浏览器 */
export declare const isBrowser: boolean;
/** 是否是移动端 */
export declare const isMobile: boolean;
/**
 *
 * 判断是否支持某个css属性
 * @param {string} prop
 * @return {*}  {boolean}
 */
export declare const isSupportStyleProp: (prop: string) => boolean;
/**
 * 判断是否支持某个css属性的值，比如position: sticky
 *
 * @param {*} prop
 * @param {*} value
 * @return {*}
 */
export declare const isSupportStyleValue: (prop: string, value: string) => boolean;
/** 是否支持passive事件选项 */
export declare const passiveIfSupported = false;
export declare type Dispose = (beforeDispose?: () => Promise<void>) => void;
/**
 *  container内部元素卸载前执行过渡动画, 配合renderElement使用(Notify,Toast,AlertDialog)
 *
 * @param {HTMLElement} container
 * @param {string} selector
 * @param {number} timeout
 * @return {*}  {Promise<void>}
 */
export declare const beforeDisposeGen: (container: HTMLElement, selector: string, timeout: number) => (() => Promise<void>);
/**
 * 自定义渲染元素到容器
 *
 * @param {ReactElement} element
 * @param {HTMLElement} [container]
 * @return {Dispose}  dispose
 */
export declare const renderElement: (element: ReactElement, container?: HTMLElement) => Dispose;
/**
 * 动态加载 js/css文件
 *
 * @param {string} url
 * @param {*} [attrs={}] 额外的属性设置
 * @return {*}  {Promise<void>}
 */
export declare const loadResource: (url: string, attrs?: {}) => Promise<void>;

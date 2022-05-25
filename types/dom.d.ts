import { ReactElement } from 'react';
/** 是否是浏览器 */
export declare const isBrowser: boolean;
/** 是否是移动端 */
export declare const isMobile: boolean;
/**
 *
 * 是否支持某个css属性
 * @param {string} prop
 * @return {*}  {boolean}
 */
export declare const isCssPropExist: (prop: string) => boolean;
/**
 * 是否支持某个css属性的值，比如position: sticky
 *
 * @param {*} prop
 * @param {*} value
 * @return {*}
 */
export declare const isCssValueExist: (prop: string, value: string) => boolean;
/** 是否支持passive事件选项 */
export declare const isPassiveSupported: false;
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
/** 是否支持触屏 */
export declare const isTouch: boolean;
export declare const isCssVarSupported: boolean;
declare type ScrollElement = Element | Window;
/**
 * get scroll parent of el, return root(default as window) if not found
 *
 * @export
 * @param {Element} el
 * @param {(ScrollElement | null | undefined)} [root=window]
 * @return {*}
 */
export declare function getScrollParent(el: Element, root?: ScrollElement | null | undefined): ScrollElement;
/**
 * get scroll parent's scrollTop
 *
 * @param {Element} el
 * @return {*}  {number}
 */
export declare const getScrollTop: (el: Element) => number;
export {};

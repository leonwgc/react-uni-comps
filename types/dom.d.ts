import { ReactElement } from 'react';
export declare const detectFlexGapSupported: () => boolean;
export declare const offset: (el: HTMLElement | null) => {
    top: number;
    left: number;
};
export declare const isBrowser: boolean;
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
export declare const passiveIfSupported = false;
/**
 * render element into doc & return dispose func
 *
 * @param {ReactElement} element
 * @return {*}  {(() => void)}
 */
export declare const renderElement: (element: ReactElement) => (() => void);

export declare const MARGIN = 12;
interface IModalStyle {
    position: 'absolute' | 'fixed';
    top: number;
    left: number;
}
/**
 * 根据选择器所选元素、modal 的长宽、用户定义的 placement 和 offset，获取 modal 的位置
 * Calculate the modal's position based on its anchor element, user-defined placement and offset
 * @param {HTMLElement} modalEl
 * @param {Element} anchorEl
 * @param {Element} parentEl
 * @param {string} placement
 * @param {object} customOffset
 */
export declare const getModalStyle: (modalEl: Element, anchorEl: Element, parentEl: Element, scrollContainer: Element, placement?: string, customOffset?: {
    x: number;
    y: number;
}) => IModalStyle;
export {};

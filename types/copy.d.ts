/**
 * 复制文本
 *
 * @param {string} text
 * @param {HTMLElement} [{ target = document.body }={}]
 * @return {boolean}
 */
export default function copy(text: any, { target }?: {
    target?: HTMLElement;
}): boolean;

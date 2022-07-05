/** Get the containing block for fixed positioned element as they don't have offsetParent */
export declare const getContainingBlock: (node: Element, callback?: (node: Element | null) => unknown) => (Node & ParentNode) | null;
export declare const getTrueOffsetParent: (node: HTMLElement) => Element | null;
/**
 * Gets the closest ancestor positioned element.
 * Handles some edge cases, such as table ancestors and cross browser bugs.
 */
export declare const getOffsetParent: (node: Element | HTMLElement, callback?: (node: Element | null) => unknown) => Element | (Node & ParentNode) | (Window & typeof globalThis) | null;
export declare const getOffsetTop: (node: Element | HTMLElement) => number;

/**
 * Get the window object using this function rather then simply use `window` because
 * there are cases where the window object we are seeking to reference is not in
 * the same window scope as the code we are running. (https://stackoverflow.com/a/37638629)
 */
export declare const getWindow: (node: Element) => Element | (Window & typeof globalThis);
export declare const getDocument: (node: Node | Window | Element) => Document;
export declare const getDocumentElement: (node: Element) => HTMLElement;
export declare const getComputedStyle: (node: Element) => CSSStyleDeclaration;
export declare const getNodeName: (node: Element | null) => string;
export declare const getParentNode: (node: Element | null) => (Node & ParentNode) | null;
export declare const isElement: (node: Element) => boolean;
export declare const isHTMLElement: (node: Element) => boolean;
export declare const isTableElement: (node: Element) => boolean;

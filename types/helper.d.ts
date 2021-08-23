export declare type F = (...args: any[]) => void;
export declare const debounce: (fn: F, timeout?: number) => F;
export declare const throttle: (fn: F, timeout?: number) => F;

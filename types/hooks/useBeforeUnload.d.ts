/**
 * 刷新或关闭浏览器执行
 *
 * @param {string} [message]
 * @param {(boolean | (() => boolean))} [enabled=true]
 */
declare const useBeforeUnload: (message?: string, enabled?: boolean | (() => boolean)) => void;
export default useBeforeUnload;

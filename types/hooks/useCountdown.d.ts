declare type CountdownHooksReturn = {
    /** 倒计时开始数字，默认60 */
    countdown: number;
    /** 倒计时中 */
    isRunning: boolean;
    /** 完成过一次倒计时，重新start过 */
    isReStarted: boolean;
    /** 开始倒计时 */
    start: () => void;
    /** 重置倒计时 */
    reset: () => void;
};
/**
 * 获取验证码倒计时
 *
 * @param {number} [defaultCountdown=60] 默认从60秒开始倒计时
 * @param {boolean} [defaultStarted=false] 默认开始否
 * @return {*} {
  countdown: number;
  isRunning: boolean;
  isReStarted: boolean;
  start: () => void;
  reset: () => void;
}
 */
declare const useCountdown: (defaultCountdown?: number, defaultStarted?: boolean) => CountdownHooksReturn;
export default useCountdown;

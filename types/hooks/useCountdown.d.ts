/** 获取验证码倒计时 ex
 const { countdown, started, start, stop } = useCountdown();

<a className="code" ref={ref} onClick={started ? null : showSuperCode}>
   {started ? countdown + '秒' : '获取验证码'}
</a>

*/
declare type CountdownReturnType = {
    countdown: number;
    started: boolean;
    start: () => void;
    reset: () => void;
};
/**
 * 获取验证码倒计时
 *
 * @param {number} [defaultCountdown=60] 默认从60秒开始倒计时
 * @param {boolean} [defaultStarted=false] 默认开始否
 * @return {*} {
  countdown: number;
  started: boolean;
  start: () => void;
  reset: () => void;
}
 */
declare const useCountdown: (defaultCountdownSec: number, defaultStarted: boolean) => CountdownReturnType;
export default useCountdown;

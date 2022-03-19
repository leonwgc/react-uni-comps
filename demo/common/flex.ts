var docEl = document.documentElement;

function setRem(rem = 100, designWidth = 375) {
  docEl.style.fontSize = Math.min(docEl.clientWidth / (designWidth / rem), 120) + 'px';

  // fix rem influenced by system font-size setting
  var docElFontSize = Number(docEl.style.fontSize.replace(/px/gi, ''));
  var computedFontSize = window.getComputedStyle(docEl)['font-size'].replace(/px/gi, '');
  docElFontSize != computedFontSize &&
    (docEl.style.fontSize = Math.pow(docElFontSize, 2) / computedFontSize + 'px');
}
/**
 * 设置rem适配
 *
 * @export
 * @param {number} [rem=100]
 * @param {number} [designWidth=375]
 */
export default function setRemFlex(rem = 100, designWidth = 375) {
  window.addEventListener('resize', () => setRem(rem, designWidth));
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      setRem(rem, designWidth);
    }
  });
  setRem(rem, designWidth);
}

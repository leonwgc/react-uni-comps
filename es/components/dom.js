var flexGapSupported;
export var detectFlexGapSupported = function detectFlexGapSupported() {
  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  }

  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));
  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1;
  document.body.removeChild(flex);
  return flexGapSupported;
};
export var offset = function offset(el) {
  var top = 0;
  var left = 0;

  while (el) {
    top += el.offsetTop;
    left += el.offsetLeft;
    el = el.offsetParent;
  }

  return {
    top: top,
    left: left
  };
};
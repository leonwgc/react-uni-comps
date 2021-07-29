let flexGapSupported: boolean;

export const detectFlexGapSupported = (): boolean => {
  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  }

  const flex = document.createElement('div');
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

export const offset = (el: HTMLElement | null): { top: number; left: number } => {
  let top = 0;
  let left = 0;
  while (el) {
    top += el.offsetTop;
    left += el.offsetLeft;
    el = el.offsetParent as HTMLElement;
  }

  return { top, left };
};

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

import { getReversePosition } from './getReversePosition';
export var getArrowStyle = function getArrowStyle(modalEl, placement, mask, margin, diagonalWidth // make it the same as arrow w/h
) {
  var _a, _b;

  if (placement === void 0) {
    placement = 'bottom';
  }

  if (mask === void 0) {
    mask = false;
  }

  if (margin === void 0) {
    margin = 12;
  }

  if (diagonalWidth === void 0) {
    diagonalWidth = 6;
  }

  var modalPos = modalEl.getBoundingClientRect();

  var _c = placement.split('-'),
      firstPlacement = _c[0],
      lastPlacement = _c[1];

  var boxShadowmMap = {
    top: "1px 1px 1px 0px rgba(0, 0, 0, 0.05)",
    right: "-1px 1px 1px 0px rgba(0, 0, 0, 0.05)",
    bottom: "-1px -1px 1px 0px rgba(0, 0, 0, 0.05)",
    left: "1px -1px 1px 0px rgba(0, 0, 0, 0.05)"
  };
  var extraStyle = (_a = {
    boxShadow: mask ? 'none' : boxShadowmMap[firstPlacement]
  }, _a[getReversePosition(firstPlacement)] = -diagonalWidth / 2, _a);

  if (!lastPlacement) {
    var style = {};

    if (['bottom', 'top'].includes(firstPlacement)) {
      style['right'] = (modalPos.width - diagonalWidth) / 2;
    }

    if (['left', 'right'].includes(firstPlacement)) {
      style['top'] = (modalPos.height - diagonalWidth) / 2;
    }

    return __assign(__assign({}, style), extraStyle);
  } else {
    return __assign((_b = {}, _b[lastPlacement] = margin * 2, _b), extraStyle);
  }
};
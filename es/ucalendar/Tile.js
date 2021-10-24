var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

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
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { tileProps } from './shared/propTypes';

function getValue(nextProps, prop) {
  var activeStartDate = nextProps.activeStartDate,
      date = nextProps.date,
      view = nextProps.view;
  return typeof prop === 'function' ? prop({
    activeStartDate: activeStartDate,
    date: date,
    view: view
  }) : prop;
}

var Tile =
/** @class */
function (_super) {
  __extends(Tile, _super);

  function Tile() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {};
    return _this;
  }

  Tile.getDerivedStateFromProps = function (nextProps, prevState) {
    var tileClassName = nextProps.tileClassName,
        tileContent = nextProps.tileContent;
    var nextState = {};

    if (tileClassName !== prevState.tileClassNameProps) {
      nextState.tileClassName = getValue(nextProps, tileClassName);
      nextState.tileClassNameProps = tileClassName;
    }

    if (tileContent !== prevState.tileContentProps) {
      nextState.tileContent = getValue(nextProps, tileContent);
      nextState.tileContentProps = tileContent;
    }

    return nextState;
  };

  Tile.prototype.render = function () {
    var _a = this.props,
        activeStartDate = _a.activeStartDate,
        children = _a.children,
        classes = _a.classes,
        date = _a.date,
        formatAbbr = _a.formatAbbr,
        locale = _a.locale,
        maxDate = _a.maxDate,
        maxDateTransform = _a.maxDateTransform,
        minDate = _a.minDate,
        minDateTransform = _a.minDateTransform,
        onClick = _a.onClick,
        onMouseOver = _a.onMouseOver,
        style = _a.style,
        tileDisabled = _a.tileDisabled,
        view = _a.view;
    var _b = this.state,
        tileClassName = _b.tileClassName,
        tileContent = _b.tileContent;
    return /*#__PURE__*/React.createElement("button", {
      className: clsx(classes, tileClassName),
      disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({
        activeStartDate: activeStartDate,
        date: date,
        view: view
      }),
      onClick: onClick && function (event) {
        return onClick(date, event);
      },
      onFocus: onMouseOver && function () {
        return onMouseOver(date);
      },
      onMouseOver: onMouseOver && function () {
        return onMouseOver(date);
      },
      style: style,
      type: "button"
    }, formatAbbr ? /*#__PURE__*/React.createElement("abbr", {
      "aria-label": formatAbbr(locale, date)
    }, children) : children, tileContent);
  };

  return Tile;
}(Component);

export default Tile;
Tile.propTypes = __assign(__assign({}, tileProps), {
  children: PropTypes.node.isRequired,
  formatAbbr: PropTypes.func,
  maxDateTransform: PropTypes.func.isRequired,
  minDateTransform: PropTypes.func.isRequired
});
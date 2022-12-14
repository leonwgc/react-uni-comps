import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Space, Cell, IconArrow, Icon } from 'react-uni-comps';

const demos = [
  'FloatingBubble',
  'ClockSpin',
  'Sudoku',
  'Turntable',
  'SlideCard',
  'Countdown',
  'i18n',
  'DropdownMenu',
  'RoundSpin',
  'CircleSpin',
  'DotSpin',
  'BallSpin',
  'SwipeAction',
  'SkeletonElement',
  'Skeleton',
  'ImageViewer',
  'SlideFullPage',
  'Slide',
  'IndexListPop',
  'ScrollBox',
  'PullToRefresh',
  'Pullup',
  'PullupDom',
  'Tabs',
  'Masonry',
  'BackTop',
  'Guide',
  'DatePicker',
  'Picker',
  'PickerView',
  'Affix',
  'Button',
  'Input',
  'SearchBar',
  'InputNumber',
  'Toast',
  'Loading',
  'AlertDialog',
  'Modal',
  'Drawer',
  'Mask',
  'Result',
  'Empty',
  'PopConfirm',
  'Tooltip',
  'PopMenu',
  'Popover',
  'SignatureLandscape',
  'Signature',
  'Ripple',
  'Stepper',
  'SortableList',
  'PasswordInput',
  'SideBar',
  'Pagination',
  'LazyloadImage',
  'Calendar',
  'Form',
  'SafeArea',
  'RollingNumber',
  'Collapse',
  'ProgressBar',
  'QRCode',
  'WaitLoading',
  'Avatar',
  'Badge',
  'Notify',
  'Radio',
  'RadioGroup',
  'Checkbox',
  'CheckboxGroup',
  'WaterMark',
  'ProgressCircle',
  'NoticeList',
  'NoticeBar',
  'Rate',
  'Steps',
  'HairLineBox',
  'NumberKeyboard',
  'TransitionElement',
  'AnimationElement',
  'LazyLoadElement',
  'Cell',
  'Spin',
  'Switch',
  'Divider',
  'FileInputTrigger',
  'Waypoint',
  'IndexList',
  'Drag',
  'CopyToClipboard',
  'Text',
  'Popup',
  'Icon',
  'ActionSheet',
];

export default function All() {
  const history = useHistory();
  const gotoPage = useCallback((page) => {
    document.title = page;
    history.push(`/${page}`);
  }, []);

  useEffect(() => {
    document.title = 'react-uni-comps';
  }, []);

  return (
    <div>
      {demos.map((name) => (
        <Cell
          key={name}
          label={
            <Space>
              <Icon type="uc-icon-zujian" /> {name}
            </Space>
          }
          content={<IconArrow direction="right" />}
          onClick={() => gotoPage(name)}
        ></Cell>
      ))}
    </div>
  );
}

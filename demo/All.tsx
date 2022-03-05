import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Space, Cell, IconArrow, Icon } from 'react-uni-comps';

const IconComponent = () => <Icon type="uc-icon-zujian" />;

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
      <Cell
        label={
          <Space>
            <IconComponent /> Signature/Landscape
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SignatureLandscape')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Signature
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Signature')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Ripple
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Ripple')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> SearchBar
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SearchBar')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Stepper
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Stepper')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> SortableList
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SortableList')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> PasswordInput
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PasswordInput')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Input
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Input')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Toast
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Toast')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> SideBar
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SideBar')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Empty
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Empty')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Tabs
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Tabs')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Pagination
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Pagination')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Loading
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Loading')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> ImageViewer
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ImageViewer')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> FingerGestureElement
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('FingerGestureElement')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> DatePicker
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('DatePicker')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Picker
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Picker')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> PickerView
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PickerView')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> LazyloadImage
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('LazyloadImage')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Calendar
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Calendar')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> SwipeAction
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SwipeAction')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> Slide FullPage
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SlideFullPage')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Slide
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Slide')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> ScrollToTop
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ScrollToTop')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> PullToRefresh
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PullToRefresh')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Pullup
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Pullup')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> PullupDom
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PullupDom')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> Form
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Form')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> SafeArea
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SafeArea')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> RollingNumber
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('RollingNumber')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Collapse
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Collapse')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> ProgressBar
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ProgressBar')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> QRCode
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('QRCode')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> WaitLoading
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('WaitLoading')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> PopConfirm
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PopConfirm')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> PopMenu
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PopMenu')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Modal
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Modal')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Drawer
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Drawer')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> Avatar
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Avatar')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Badge
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Badge')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> AlertDialog
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('AlertDialog')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Notify
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Notify')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> Radio
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Radio')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> RadioGroup
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('RadioGroup')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Checkbox
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Checkbox')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> CheckboxGroup
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('CheckboxGroup')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> WaterMark
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('WaterMark')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> ProgressCircle
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ProgressCircle')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> NoticeList
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NoticeList')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> NoticeBar
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NoticeBar')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Rate
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Rate')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> Steps
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Steps')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> HairLineBox
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('HairLineBox')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> NumberKeyboard
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NumberKeyboard')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> TransitionElement
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('TransitionElement')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> AnimationElement
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('AnimationElement')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> LazyLoadElement
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('LazyLoadElement')}
      ></Cell>

      <Cell
        label={
          <Space>
            <IconComponent /> Skeleton
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Skeleton')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Cell
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Cell')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Spin
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Spin')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Switch
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Switch')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Divider
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Divider')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> FileInputTrigger
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('FileInputTrigger')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Waypoint
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Waypoint')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> IndexList
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('IndexList')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Popover
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Popover')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Drag
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Drag')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> CopyToClipboard
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('CopyToClipboard')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Text
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Text')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Tooltip
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Tooltip')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Popup
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Popup')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Icon
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Icon')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Button
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Button')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> Affix
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Affix')}
      ></Cell>
      <Cell
        label={
          <Space>
            <IconComponent /> ActionSheet
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ActionSheet')}
      ></Cell>
    </div>
  );
}

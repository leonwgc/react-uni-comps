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
        title={
          <Space>
            <IconComponent /> ScrollToTop
          </Space>
        }
        description="ScrollToTop"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ScrollToTop')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> PullToRefresh
          </Space>
        }
        description="PullToRefresh"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PullToRefresh')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Pullup
          </Space>
        }
        description="上拉无限加载"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Pullup')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> PullupDom
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PullupDom')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Ripple
          </Space>
        }
        description="Ripple"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Ripple')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Form
          </Space>
        }
        description="Form"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Form')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> SafeArea
          </Space>
        }
        description="SafeArea"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SafeArea')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> RollingNumber
          </Space>
        }
        description="RollingNumber"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('RollingNumber')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Collapse
          </Space>
        }
        description="Collapse"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Collapse')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> ProgressBar
          </Space>
        }
        description="ProgressBar"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ProgressBar')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> QRCode
          </Space>
        }
        description="QRCode"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('QRCode')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Picker
          </Space>
        }
        description="移动端触屏选择器"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Picker')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> PickerView
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PickerView')}
      ></Cell>

      <Cell
        title={
          <Space>
            <IconComponent /> DatePicker
          </Space>
        }
        description="年月日选择"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('DatePicker')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Calendar
          </Space>
        }
        description="移动端日历选择"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Calendar')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> WaitLoading
          </Space>
        }
        description="防止spinner闪烁"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('WaitLoading')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> PopConfirm
          </Space>
        }
        description="二次确认气泡框"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PopConfirm')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> PopMenu
          </Space>
        }
        description="弹出气泡框菜单"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PopMenu')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Modal
          </Space>
        }
        description="中间弹出对话框"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Modal')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Drawer
          </Space>
        }
        description="上下左右抽屉"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Drawer')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> ImageViewer
          </Space>
        }
        description="图片查看"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ImageViewer')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Avatar
          </Space>
        }
        description="头像显示"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Avatar')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Badge
          </Space>
        }
        description="右上角添加标记"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Badge')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> AlertDialog
          </Space>
        }
        description="当做window.alert使用"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('AlertDialog')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Notify
          </Space>
        }
        description="顶部弹出提示信息"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Notify')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Toast
          </Space>
        }
        description="中间弹出黑色背景提示信息"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Toast')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Radio
          </Space>
        }
        description="单选"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Radio')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> RadioGroup
          </Space>
        }
        description="单选组"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('RadioGroup')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Checkbox
          </Space>
        }
        description="多选"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Checkbox')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> CheckboxGroup
          </Space>
        }
        description="多选组"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('CheckboxGroup')}
      ></Cell>

      <Cell
        title={
          <Space>
            <IconComponent /> WaterMark
          </Space>
        }
        description="文字/图片水印"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('WaterMark')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> ProgressCircle
          </Space>
        }
        description="环形进度"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ProgressCircle')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Slide FullPage
          </Space>
        }
        description="全屏滑动幻灯片示例"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SlideFullPage')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Slide
          </Space>
        }
        description="幻灯片"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Slide')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> NoticeList
          </Space>
        }
        description="垂直滚动信息提示"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NoticeList')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> NoticeBar
          </Space>
        }
        description="水平滚动信息提示"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NoticeBar')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Rate
          </Space>
        }
        description="评价几颗星"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Rate')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Signature/Landscape
          </Space>
        }
        description="横屏手写签名"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SignatureLandscape')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Signature
          </Space>
        }
        description="手写签名"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Signature')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Input
          </Space>
        }
        description="输入"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Input')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Steps
          </Space>
        }
        description="步骤条"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Steps')}
      ></Cell>

      <Cell
        title={
          <Space>
            <IconComponent /> SwipeAction
          </Space>
        }
        description="滑动操作"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SwipeAction')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> HairLineBox
          </Space>
        }
        description="一像素边框"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('HairLineBox')}
      ></Cell>

      <Cell
        title={
          <Space>
            <IconComponent /> NumberKeyboard
          </Space>
        }
        description="数字键盘"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NumberKeyboard')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> PasswordInput
          </Space>
        }
        description="自定义密码输入框"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PasswordInput')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> TransitionElement
          </Space>
        }
        description="过渡动画"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('TransitionElement')}
      ></Cell>

      <Cell
        title={
          <Space>
            <IconComponent /> AnimationElement
          </Space>
        }
        description="动画"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('AnimationElement')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> LazyloadImage
          </Space>
        }
        description="替换img,实现懒加载"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('LazyloadImage')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> LazyLoadElement
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('LazyLoadElement')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Tabs
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Tabs')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Skeleton
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Skeleton')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Cell
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Cell')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Spin
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Spin')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Switch
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Switch')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Divider
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Divider')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> FileInputTrigger
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('FileInputTrigger')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Waypoint
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Waypoint')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> IndexList
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('IndexList')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Popover
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Popover')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Drag
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Drag')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> CopyToClipboard
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('CopyToClipboard')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Text
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Text')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Tooltip
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Tooltip')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Popup
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Popup')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Icon
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Icon')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Button
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Button')}
      ></Cell>
      <Cell
        title={
          <Space>
            <IconComponent /> Affix
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Affix')}
      ></Cell>
      <Cell
        title={
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

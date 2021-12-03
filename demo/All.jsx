import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Space, Cell, IconArrow, Icon } from '../src';

const SoundOutlined = () => <Icon type="uc-icon-zujian" />;

export default function All() {
  const history = useHistory();
  const gotoPage = useCallback((page) => {
    document.title = page;
    history.push(`/${page}`);
  }, []);
  return (
    <div>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Login
          </Space>
        }
        description="移动端登录风格"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Login')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> DatePicker
          </Space>
        }
        description="年月日选择"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('DatePicker')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Calendar
          </Space>
        }
        description="移动端日历选择"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Calendar')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> WaitLoading
          </Space>
        }
        description="防止spinner闪烁"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('WaitLoading')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> PopConfirm
          </Space>
        }
        description="二次确认气泡框"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PopConfirm')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> PopMenu
          </Space>
        }
        description="弹出气泡框菜单"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PopMenu')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Modal
          </Space>
        }
        description="中间弹出对话框"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Modal')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Drawer
          </Space>
        }
        description="上下左右抽屉"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Drawer')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> ImageViewer
          </Space>
        }
        description="图片查看"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ImageViewer')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Avatar
          </Space>
        }
        description="头像显示"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Avatar')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Badge
          </Space>
        }
        description="右上角添加标记"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Badge')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> AlertDialog
          </Space>
        }
        description="当做window.alert使用"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('AlertDialog')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Notify
          </Space>
        }
        description="顶部弹出提示信息"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Notify')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Toast
          </Space>
        }
        description="中间弹出黑色背景提示信息"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Toast')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Radio
          </Space>
        }
        description="单选"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Radio')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> RadioGroup
          </Space>
        }
        description="单选组"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('RadioGroup')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Checkbox
          </Space>
        }
        description="多选"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Checkbox')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> CheckboxGroup
          </Space>
        }
        description="多选组"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('CheckboxGroup')}
      ></Cell>

      <Cell
        title={
          <Space>
            <SoundOutlined /> WaterMark
          </Space>
        }
        description="文字/图片水印"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('WaterMark')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> ProgressCircle
          </Space>
        }
        description="环形进度"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ProgressCircle')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Slide FullPage
          </Space>
        }
        description="全屏滑动幻灯片示例"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SlideFullPage')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Slide
          </Space>
        }
        description="幻灯片"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Slide')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> NoticeList
          </Space>
        }
        description="垂直滚动信息提示"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NoticeList')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> NoticeBar
          </Space>
        }
        description="水平滚动信息提示"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NoticeBar')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Rate
          </Space>
        }
        description="评价几颗星"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Rate')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Signature/Landscape
          </Space>
        }
        description="横屏手写签名"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SignatureLandscape')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Signature
          </Space>
        }
        description="手写签名"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Signature')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Input
          </Space>
        }
        description="输入"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Input')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Steps
          </Space>
        }
        description="步骤条"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Steps')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Picker
          </Space>
        }
        description="移动端触屏选择器"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Picker')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> SwipeAction
          </Space>
        }
        description="滑动操作"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SwipeAction')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> HairLineBox
          </Space>
        }
        description="一像素边框"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('HairLineBox')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> FingerGestureElement
          </Space>
        }
        description="手势操作"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('FingerGestureElement')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> NumberKeyboard
          </Space>
        }
        description="数字键盘"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NumberKeyboard')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> PasswordInput
          </Space>
        }
        description="自定义密码输入框"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PasswordInput')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> TransitionElement
          </Space>
        }
        description="过渡动画"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('TransitionElement')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Pullup & ScrollTop
          </Space>
        }
        description="上拉无限加载"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Pullup')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> PullupDom
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PullupDom')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> AnimationElement
          </Space>
        }
        description="动画"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('AnimationElement')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> LazyloadImage
          </Space>
        }
        description="替换img,实现懒加载"
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('LazyloadImage')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> LazyLoadElement
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('LazyLoadElement')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Tab
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Tab')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Skeleton
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Skeleton')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Cell
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Cell')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Spinner
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Spinner')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Switch
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Switch')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Divider
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Divider')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> ImageUpload
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ImageUpload')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Waypoint
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Waypoint')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> IndexList
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('IndexList')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Popover
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Popover')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Drag
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Drag')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> CopyToClipboard
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('CopyToClipboard')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Text
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Text')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Tooltip
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Tooltip')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Popup
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Popup')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Icon
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Icon')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Button
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Button')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Affix
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Affix')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> ActionSheet
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ActionSheet')}
      ></Cell>
    </div>
  );
}

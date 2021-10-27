import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
// import { SoundOutlined } from '@ant-design/icons';
import { Space, Cell, IconArrow, Icon } from '../src';

const SoundOutlined = () => <Icon type="icon-zujian" />;

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
            <SoundOutlined /> Drawer
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Drawer')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> DatePicker
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('DatePicker')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Calendar
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Calendar')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> ImageViewer
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ImageViewer')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Avatar
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Avatar')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Badge
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Badge')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> AlertDialog
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('AlertDialog')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Notify
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Notify')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Toast
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Toast')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Radio
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Radio')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> RadioGroup
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('RadioGroup')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> CheckboxGroup
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('CheckboxGroup')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Checkbox
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Checkbox')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> WaterMark
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('WaterMark')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> ProgressCircle
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ProgressCircle')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Slide FullPage
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SlideFullPage')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Slide
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Slide')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> NoticeList
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NoticeList')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> NoticeBar
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NoticeBar')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Rate
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Rate')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Signature/Landscape
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('SignatureLandscape')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Signature
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Signature')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Input
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Input')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Steps
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Steps')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Picker
          </Space>
        }
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
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NumberKeyboard')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> PasswordInput
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('PasswordInput')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> TransitionElement
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('TransitionElement')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Pullup & ScrollTop
          </Space>
        }
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
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('AnimationElement')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> LazyloadImage
          </Space>
        }
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
            <SoundOutlined /> Clickable Effect
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => console.log(1)}
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

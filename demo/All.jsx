import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';
import { SoundOutlined } from '@ant-design/icons';
import { Space, Cell, Button, Checkbox, Switch, IconArrow } from '../src';

export default function All() {
  const history = useHistory();
  const gotoPage = useCallback((page) => {
    history.push(`/${page}`);
  }, []);
  return (
    <div>
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
            <SoundOutlined /> NumberKeyboardPicker
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NumberKeyboardPicker')}
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
            <SoundOutlined /> Checkbox
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Checkbox')}
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
            <SoundOutlined /> Toast
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Toast')}
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
            <SoundOutlined /> NoticeBar
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NoticeBar')}
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
      <Cell
        title={
          <Space>
            <SoundOutlined /> AlertDialog
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('AlertDialog')}
      ></Cell>
    </div>
  );
}

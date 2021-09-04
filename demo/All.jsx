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
        label={
          <Space>
            <SoundOutlined /> TransitionElement
          </Space>
        }
        content="go"
        onClick={() => gotoPage('TransitionElement')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> AnimationElement
          </Space>
        }
        content="go"
        onClick={() => gotoPage('AnimationElement')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> LazyloadImage
          </Space>
        }
        content="go"
        onClick={() => gotoPage('LazyloadImage')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> LazyLoadElement
          </Space>
        }
        content="go"
        onClick={() => gotoPage('LazyLoadElement')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Tab
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Tab')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Skeleton
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Skeleton')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Checkbox
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Checkbox')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Cell
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Cell')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Spinner
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Spinner')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Switch
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Switch')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Divider
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Divider')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> ImageUpload
          </Space>
        }
        content="go"
        onClick={() => gotoPage('ImageUpload')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Waypoint
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Waypoint')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> IndexList
          </Space>
        }
        content="go"
        onClick={() => gotoPage('IndexList')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Slide
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Slide')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> SlideFull
          </Space>
        }
        content="go"
        onClick={() => gotoPage('SlideFull')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Popover
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Popover')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Drag
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Drag')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> CopyToClipboard
          </Space>
        }
        content="go"
        onClick={() => gotoPage('CopyToClipboard')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Text
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Text')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Tooltip
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Tooltip')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Popup
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Popup')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Toast
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Toast')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Icon
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Icon')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Button
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Button')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Clickable Effect
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => console.log(1)}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> NoticeBar
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('NoticeBar')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> Affix
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('Affix')}
      ></Cell>
      <Cell
        label={
          <Space>
            <SoundOutlined /> ActionSheet
          </Space>
        }
        content={<IconArrow direction="right" />}
        onClick={() => gotoPage('ActionSheet')}
      ></Cell>
      <Cell
        label={
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

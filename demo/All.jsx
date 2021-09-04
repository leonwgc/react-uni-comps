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
            <SoundOutlined /> TransitionElement
          </Space>
        }
        content="go"
        onClick={() => gotoPage('TransitionElement')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> AnimationElement
          </Space>
        }
        content="go"
        onClick={() => gotoPage('AnimationElement')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> LazyloadImage
          </Space>
        }
        content="go"
        onClick={() => gotoPage('LazyloadImage')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> LazyLoadElement
          </Space>
        }
        content="go"
        onClick={() => gotoPage('LazyLoadElement')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Tab
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Tab')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Skeleton
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Skeleton')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Checkbox
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Checkbox')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Cell
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Cell')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Spinner
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Spinner')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Switch
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Switch')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Divider
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Divider')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> ImageUpload
          </Space>
        }
        content="go"
        onClick={() => gotoPage('ImageUpload')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Waypoint
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Waypoint')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> IndexList
          </Space>
        }
        content="go"
        onClick={() => gotoPage('IndexList')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Slide
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Slide')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> SlideFull
          </Space>
        }
        content="go"
        onClick={() => gotoPage('SlideFull')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Popover
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Popover')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Drag
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Drag')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> CopyToClipboard
          </Space>
        }
        content="go"
        onClick={() => gotoPage('CopyToClipboard')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Text
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Text')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Tooltip
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Tooltip')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Popup
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Popup')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Toast
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Toast')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Icon
          </Space>
        }
        content="go"
        onClick={() => gotoPage('Icon')}
      ></Cell>
      <Cell
        title={
          <Space>
            <SoundOutlined /> Button
          </Space>
        }
        content="go"
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

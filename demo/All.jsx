import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Space, Cell, Button, Checkbox, Switch } from '../src';

export default function All() {
  const history = useHistory();
  const gotoPage = useCallback((page) => {
    history.push(`/${page}`);
  }, []);
  return (
    <div>
      <Cell
        label="TransitionElement"
        content="go"
        onClick={() => gotoPage('TransitionElement')}
      ></Cell>
      <Cell
        label="AnimationElement"
        content="go"
        onClick={() => gotoPage('AnimationElement')}
      ></Cell>
      <Cell label="LazyloadImage" content="go" onClick={() => gotoPage('LazyloadImage')}></Cell>
      <Cell label="LazyLoadElement" content="go" onClick={() => gotoPage('LazyLoadElement')}></Cell>
      <Cell label="Tab" content="go" onClick={() => gotoPage('Tab')}></Cell>
      <Cell label="Skeleton" content="go" onClick={() => gotoPage('Skeleton')}></Cell>
      <Cell label="Checkbox" content="go" onClick={() => gotoPage('Checkbox')}></Cell>
      <Cell label="Cell" content="go" onClick={() => gotoPage('Cell')}></Cell>
      <Cell label="Spinner" content="go" onClick={() => gotoPage('Spinner')}></Cell>
      <Cell label="Switch" content="go" onClick={() => gotoPage('Switch')}></Cell>
      <Cell label="Divider" content="go" onClick={() => gotoPage('Divider')}></Cell>
      <Cell label="ImageUpload" content="go" onClick={() => gotoPage('ImageUpload')}></Cell>
      <Cell label="Waypoint" content="go" onClick={() => gotoPage('Waypoint')}></Cell>
      <Cell label="IndexList" content="go" onClick={() => gotoPage('IndexList')}></Cell>
      <Cell label="Slide" content="go" onClick={() => gotoPage('Slide')}></Cell>
      <Cell label="SlideFull" content="go" onClick={() => gotoPage('SlideFull')}></Cell>
      <Cell label="Popover" content="go" onClick={() => gotoPage('Popover')}></Cell>
      <Cell label="Drag" content="go" onClick={() => gotoPage('Drag')}></Cell>
    </div>
  );
}

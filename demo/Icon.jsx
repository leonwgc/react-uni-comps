import React from 'react';
import { Cell, Icon, IconArrow, styled } from 'react-uni-comps';

Icon.loadFromIconfontCN('//at.alicdn.com/t/font_2878668_3svlljpx94y.js'); // misc-icons

const StyledIcon = styled(Icon)`
  font-size: 36px;
  color: red;
`;

export default function App() {
  return (
    <div>
      <Cell title="IconFont"></Cell>
      <StyledIcon type="icon-yonghu" />
      <Icon type="icon-lock_filled_regular" style={{ color: '#00bc8d', fontSize: 20 }} />
      <Cell title="IconArrow-right"></Cell>
      <IconArrow direction="right"></IconArrow>
      <IconArrow size={40} direction="right"></IconArrow>
      <IconArrow size={40} color="#004bcc" direction="right"></IconArrow>
      <IconArrow size={60} color="#00bc8d" direction="right"></IconArrow>
      <Cell title="IconArrow-top"></Cell>
      <IconArrow direction="top"></IconArrow>
      <IconArrow size={40} direction="top"></IconArrow>
      <IconArrow size={40} color="#004bcc" direction="top"></IconArrow>
      <IconArrow size={60} color="#00bc8d" direction="top"></IconArrow>
      <Cell title="IconArrow-left"></Cell>
      <IconArrow direction="left"></IconArrow>
      <IconArrow size={40} direction="left"></IconArrow>
      <IconArrow size={40} color="#004bcc" direction="left"></IconArrow>
      <IconArrow size={60} color="#00bc8d" direction="left"></IconArrow>
      <Cell title="IconArrow-bottom"></Cell>
      <IconArrow direction="bottom"></IconArrow>
      <IconArrow size={40} direction="bottom"></IconArrow>
      <IconArrow size={40} color="#004bcc" direction="bottom"></IconArrow>
      <IconArrow size={60} color="#00bc8d" direction="bottom"></IconArrow>
    </div>
  );
}

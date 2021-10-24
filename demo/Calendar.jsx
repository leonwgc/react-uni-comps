import React, { useState } from 'react';
import { Calendar, Button } from '../src';
import styled from '../src/styled';
import { UserOutlined } from '@ant-design/icons';

const StyledDate = styled.span`
  display: block;
  color: red;
  font-size: 10px;
`;

export default function App() {
  const [value, onChange] = useState(new Date());
  const [value1, onChange1] = useState();
  return (
    <div>
      <Calendar
        onChange={(v) => {
          onChange1(v);
          console.log(v);
        }}
        value={value1}
        tileContent={({ activeStartDate, date, view }) => {
          if (view === 'month' && date.getDate() === 15) {
            return <StyledDate>生日</StyledDate>;
          }
        }}
        maxDate={new Date(2021, 9, 20)}
        minDate={new Date(2021, 9, 5)}
        // showNavigation={false}
        tileDisabled={({ activeStartDate, date, view }) => {
          return date.getDate() > 16;
        }}
      />
      <Calendar
        style={{ marginTop: 30, width: 400 }}
        onChange={(v) => {
          onChange1(v);
          console.log(v);
        }}
        value={value1}
        selectRange
      />
      <Calendar
        style={{ marginTop: 30 }}
        // showWeekNumbers
        onChange={(v) => {
          onChange(v);
          console.log(v);
        }}
        onClickMonth={(v) => {
          console.log(v);
        }}
        value={value}
        view="year"
      />
    </div>
  );
}

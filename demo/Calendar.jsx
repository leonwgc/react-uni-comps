import React, { useState } from 'react';
import { Calendar, styled } from '../src';

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
      <Calendar style={{ marginTop: 30, width: 280 }} />
      <Calendar
        style={{ marginTop: 30 }}
        tileContent={({ activeStartDate, date, view }) => {
          if (view === 'month' && date.getDate() === 15) {
            return <StyledDate>生日</StyledDate>;
          }
        }}
        maxDate={new Date(2021, 9, 30)}
        minDate={new Date(2021, 9, 5)}
        // showNavigation={false}
        tileDisabled={({ activeStartDate, date, view }) => {
          return date.getDate() > 16 && date.getDate() < 22;
        }}
        showDoubleView
      />
      <Calendar style={{ marginTop: 30, width: 280 }} selectRange />
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

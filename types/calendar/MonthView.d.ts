import React from 'react';
export interface RefType {
    anchor: () => void;
}
declare const CalendarMonthView: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<RefType>>;
export default CalendarMonthView;

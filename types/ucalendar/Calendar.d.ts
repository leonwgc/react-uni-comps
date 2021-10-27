export default Calendar;
declare class Calendar extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    get activeStartDate(): any;
    get value(): any;
    get valueType(): string;
    get view(): any;
    get views(): string[];
    get hover(): any;
    get drillDownAvailable(): boolean;
    get drillUpAvailable(): boolean;
    /**
     * Gets current value in a desired format.
     */
    getProcessedValue(value: any): any;
    setStateAndCallCallbacks: (nextState: any, event: any, callback: any) => void;
    /**
     * Called when the user uses navigation buttons.
     */
    setActiveStartDate: (nextActiveStartDate: any, action: any) => void;
    drillDown: (nextActiveStartDate: any, event: any) => void;
    drillUp: () => void;
    onChange: (value: any, event: any) => void;
    onClickTile: (value: any, event: any) => void;
    onMouseOver: (value: any) => void;
    onMouseLeave: () => void;
    renderContent(next: any): JSX.Element;
    renderNavigation(): JSX.Element;
}
declare namespace Calendar {
    namespace defaultProps {
        export { defaultMaxDate as maxDate };
        export const maxDetail: string;
        export { defaultMinDate as minDate };
        export const minDetail: string;
        export const returnValue: string;
        export const showNavigation: boolean;
        export const showNeighboringMonth: boolean;
    }
}
import React from "react";
declare const defaultMaxDate: Date;
declare const defaultMinDate: Date;

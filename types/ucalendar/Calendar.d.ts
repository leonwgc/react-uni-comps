import { Component } from 'react';
declare class Calendar extends Component<any, any> {
    state: {
        activeStartDate: any;
        value: any;
        view: any;
    };
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
    render(): JSX.Element;
}
export default Calendar;

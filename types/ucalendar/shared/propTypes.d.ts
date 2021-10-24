import PropTypes from 'prop-types';
export declare const isCalendarType: PropTypes.Requireable<string>;
export declare const isClassName: PropTypes.Requireable<string | string[]>;
export declare const isMinDate: (props: any, propName: any, componentName: any) => Error;
export declare const isMaxDate: (props: any, propName: any, componentName: any) => Error;
export declare const isRef: PropTypes.Requireable<((...args: any[]) => any) | PropTypes.InferProps<{
    current: PropTypes.Requireable<any>;
}>>;
export declare const isValue: PropTypes.Requireable<Date | Date[]>;
export declare const isViews: PropTypes.Requireable<string[]>;
export declare const isView: {
    (props: any, propName: any, componentName: any): Error;
    isRequired(props: any, propName: any, componentName: any): Error;
};
export declare const tileGroupProps: {
    activeStartDate: PropTypes.Validator<Date>;
    hover: PropTypes.Requireable<Date>;
    locale: PropTypes.Requireable<string>;
    maxDate: (props: any, propName: any, componentName: any) => Error;
    minDate: (props: any, propName: any, componentName: any) => Error;
    onClick: PropTypes.Requireable<(...args: any[]) => any>;
    onMouseOver: PropTypes.Requireable<(...args: any[]) => any>;
    tileClassName: PropTypes.Requireable<string | string[] | ((...args: any[]) => any)>;
    tileContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    value: PropTypes.Requireable<Date | Date[]>;
    valueType: PropTypes.Requireable<string>;
};
export declare const tileProps: {
    activeStartDate: PropTypes.Validator<Date>;
    classes: PropTypes.Validator<string[]>;
    date: PropTypes.Validator<Date>;
    locale: PropTypes.Requireable<string>;
    maxDate: (props: any, propName: any, componentName: any) => Error;
    minDate: (props: any, propName: any, componentName: any) => Error;
    onClick: PropTypes.Requireable<(...args: any[]) => any>;
    onMouseOver: PropTypes.Requireable<(...args: any[]) => any>;
    style: PropTypes.Requireable<{
        [x: string]: string | number;
    }>;
    tileClassName: PropTypes.Requireable<string | string[] | ((...args: any[]) => any)>;
    tileContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    tileDisabled: PropTypes.Requireable<(...args: any[]) => any>;
};

/// <reference types="react" />
declare function Decades(props: any): JSX.Element;
declare namespace Decades {
    var propTypes: {
        activeStartDate: import("prop-types").Validator<Date>;
        hover: import("prop-types").Requireable<Date>;
        locale: import("prop-types").Requireable<string>;
        maxDate: (props: any, propName: any, componentName: any) => Error;
        minDate: (props: any, propName: any, componentName: any) => Error;
        onClick: import("prop-types").Requireable<(...args: any[]) => any>;
        onMouseOver: import("prop-types").Requireable<(...args: any[]) => any>;
        tileClassName: import("prop-types").Requireable<string | string[] | ((...args: any[]) => any)>;
        tileContent: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
        value: import("prop-types").Requireable<Date | Date[]>;
        valueType: import("prop-types").Requireable<string>;
    };
}
export default Decades;

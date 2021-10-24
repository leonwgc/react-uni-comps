/// <reference types="react" />
import PropTypes from 'prop-types';
declare function TileGroup({ className, count, dateTransform, dateType, end, hover, offset, start, step, tile: Tile, value, valueType, ...tileProps }: {
    [x: string]: any;
    className: any;
    count?: number;
    dateTransform: any;
    dateType: any;
    end: any;
    hover: any;
    offset: any;
    start: any;
    step?: number;
    tile: any;
    value: any;
    valueType: any;
}): JSX.Element;
declare namespace TileGroup {
    var propTypes: {
        activeStartDate: PropTypes.Requireable<Date>;
        count: PropTypes.Requireable<number>;
        dateTransform: PropTypes.Validator<(...args: any[]) => any>;
        dateType: PropTypes.Requireable<string>;
        offset: PropTypes.Requireable<number>;
        step: PropTypes.Requireable<number>;
        tile: PropTypes.Validator<(...args: any[]) => any>;
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
}
export default TileGroup;

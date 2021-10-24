/// <reference types="react" />
import PropTypes from 'prop-types';
declare function Flex({ children, className, direction, count, offset, style, wrap, ...otherProps }: {
    [x: string]: any;
    children: any;
    className: any;
    direction: any;
    count: any;
    offset: any;
    style: any;
    wrap: any;
}): JSX.Element;
declare namespace Flex {
    var propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        count: PropTypes.Validator<number>;
        direction: PropTypes.Requireable<string>;
        offset: PropTypes.Requireable<number>;
        style: PropTypes.Requireable<{
            [x: string]: string | number;
        }>;
        wrap: PropTypes.Requireable<boolean>;
    };
}
export default Flex;

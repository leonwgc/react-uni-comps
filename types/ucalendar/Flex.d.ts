import React, { HTMLAttributes } from 'react';
declare type Props = {
    children?: any;
    className?: string;
    direction?: any;
    count?: number;
    offset?: number;
    style?: any;
    wrap?: boolean;
} & HTMLAttributes<HTMLDivElement>;
export default function Flex(props: Props): React.ReactElement;
export {};

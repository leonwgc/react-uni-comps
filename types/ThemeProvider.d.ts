declare type Props = {
    /** 主题色 */
    color?: string;
    children: any;
};
/**
 * @description 主题色设置
 * @param {Props} props
 * @return {*}
 */
declare const ThemeProvider: {
    (props: Props): JSX.Element;
    displayName: string;
};
export default ThemeProvider;

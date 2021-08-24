import React from 'react';

type CrossProps = {
  size?: number;
  fill?: string;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

/** 用于关闭的 x */
const Cross = (props: CrossProps): React.ReactElement => {
  const { size = 16, fill = '#999', ...rest } = props;
  return (
    <div {...rest}>
      <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <g>
          <g>
            <rect
              fillOpacity="0.01"
              fill="#FFFFFF"
              x="0"
              y="0"
              width="48"
              height="48"
              strokeWidth="4"
              stroke="none"
              fillRule="evenodd"
            />
            <path
              d="M14,14 L34,34"
              stroke={fill}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              fillRule="evenodd"
            />
            <path
              d="M14,34 L34,14"
              stroke={fill}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Cross;

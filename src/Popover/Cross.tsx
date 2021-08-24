import React from 'react';

type CloseProps = {
  size?: number;
  fill?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Close: React.FC<CloseProps> = ({ size = 16, fill = '#999', ...rest }) => (
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

export default Close;

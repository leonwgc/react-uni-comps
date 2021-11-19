import React from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';

type Step = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

type Props = {
  steps: Step[];
  current?: number;
  className?: string;
  direction?: 'horizontal' | 'vertical';
  dotStyle?: boolean;
};

const StyledSteps = styled.div`
  width: 100%;

  .step {
    .step-box {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        background-color: #909ca4;
      }

      .step-circle {
        position: relative;
        display: flex;
        width: 25px;
        height: 25px;
        font-size: 13px;
        align-items: center;
        justify-content: center;
        z-index: 1;
        color: #909ca4;
        border: 1px solid #909ca4;
        border-radius: 50%;
        background-color: #fff;
        padding: 0;

        &.dot {
          width: 8px;
          height: 8px;
        }
      }
    }

    &.finish {
      .step-box {
        &::after {
          ${getThemeColorCss('background-color')}
        }
      }
      .step-circle {
        ${getThemeColorCss('color')}
        ${getThemeColorCss('border', '1px solid')}
      }
    }
    &.current {
      .step-circle {
        color: #fff;
        ${getThemeColorCss('background-color')}
        border:0;
      }
    }

    &.finish,
    &.current {
      .step-title {
        ${getThemeColorCss('color')}
      }
      .step-circle {
        &.dot {
          ${getThemeColorCss('background-color')}
        }
      }
    }

    &:last-child {
      .step-box::after {
        display: none;
      }
    }
  }

  &.horizontal {
    display: flex;
    justify-content: space-around;
    padding: 8px 0;

    .step {
      flex: 1;

      .step-box {
        width: 100%;
        height: 24px;
        &::after {
          left: 50%;
          top: 50%;
          height: 1px;
          transform: translateY(-50%);
          width: 100%;
        }
        .step-circle {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .step-content {
      text-align: center;
      font-size: 14px;
      padding-top: 12px;
      color: #999;
      .step-title {
      }
      .step-description {
        margin-top: 2px;
      }
    }
  }

  &.vertical {
    padding: 8px 16px;

    .step {
      display: flex;

      .step-box {
        flex: none;
        width: 24px;
        margin-right: 8px;

        &::after {
          left: 50%;
          top: 13px;
          width: 1px;
          transform: translateX(-50%);
          height: 100%;
        }
        .step-circle {
          top: 13px;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      &:last-child {
        .step-content {
          padding-bottom: 0;
        }
      }
      .step-content {
        flex: auto;
        padding-bottom: 14px;
        font-size: 14px;
        color: #999;
        .step-title {
        }
        .step-description {
          margin-top: 10px;
        }
      }
    }
  }
`;

/** 步骤条 */
const Steps = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    current = 0,
    dotStyle = false,
    className,
    direction = 'horizontal',
    steps = [],
    ...rest
  } = props;

  return (
    <StyledSteps {...rest} ref={ref} className={clsx(className, direction)}>
      {steps.map((item, idx) => (
        <div
          key={idx}
          className={clsx('step', { finish: idx < current, current: idx === current })}
        >
          <div className="step-box">
            <div className={clsx(`step-circle`, { dot: dotStyle })}>
              {dotStyle ? null : item.icon ? item.icon : idx + 1}
            </div>
          </div>
          <div className="step-content">
            <div className="step-title">{item.title}</div>
            {!!item.description && <div className="step-description">{item.description}</div>}
          </div>
        </div>
      ))}
    </StyledSteps>
  );
});

Steps.displayName = 'UC-Steps';

export default Steps;

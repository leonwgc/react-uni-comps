import React, { useRef, useImperativeHandle, useState } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import { throttle } from './helper';
import clsx from 'clsx';
import useIsomorphicLayoutEffect from './hooks/useisomorphicLayoutEffect';

export type Step = {
  /** 标题 */
  title?: React.ReactNode;
  /** 步骤的详情描述 */
  description?: React.ReactNode;
  /** 步骤图标的类型 */
  icon?: React.ReactNode;
};

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** 步骤数据 */
  steps: Step[];
  /**
   * 指定当前步骤
   * @default 0
   */
  current?: number;
  /**
   * 指定步骤条方向
   * @default horizontal
   *  */
  direction?: 'horizontal' | 'vertical';
  /**
   * 实心圈风格
   * @default false
   *  */
  dotStyle?: boolean;
};

const StyledSteps = styled.div<{ space: number }>`
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

        &.icon {
          border: none;
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

    .step {
      &:not(:last-child) {
        width: ${(props) => props.space}px;
      }
      position: relative;

      .step-box {
        width: 24px;
        height: 24px;
        &::after {
          left: 50%;
          top: 50%;
          height: 1px;
          transform: translateY(-50%);
          width: ${(props) => props.space}px;
          position: absolute;
        }
        .step-circle {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .step-content {
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
    .step {
      display: flex;

      &:not(:last-child) {
        height: ${(props) => props.space}px;
      }

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
        padding: 3px 0 14px;
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

  const domRef = useRef<HTMLDivElement>();
  useImperativeHandle(ref, () => domRef.current);
  const [space, setSpace] = useState(80);

  useIsomorphicLayoutEffect(() => {
    const isHorizontal = direction === 'horizontal';
    const resizeHandler = () => {
      if (steps.length > 1) {
        const domEl = domRef.current;
        setSpace(
          Math.max((isHorizontal ? domEl.offsetWidth : domEl.offsetHeight) / steps.length, 60)
        );
      }
    };

    const throttleResizeHandler = throttle(resizeHandler);

    if (isHorizontal) {
      window.addEventListener('resize', throttleResizeHandler);
    }
    resizeHandler();

    return () => {
      if (isHorizontal) {
        window.removeEventListener('resize', throttleResizeHandler);
      }
    };
  }, [steps, direction]);

  return (
    <StyledSteps
      {...rest}
      ref={domRef}
      className={clsx('uc-steps', className, direction)}
      space={space}
    >
      {steps.map((item, idx) => (
        <div
          key={idx}
          className={clsx('step', { finish: idx < current, current: idx === current })}
        >
          <div className="step-box">
            <div className={clsx(`step-circle`, { dot: dotStyle && !item.icon, icon: item.icon })}>
              {item.icon ? item.icon : dotStyle ? null : idx + 1}
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

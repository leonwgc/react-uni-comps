import React, { useContext } from 'react';
import { Field, default as RcForm } from 'rc-field-form';
import type { FieldProps } from 'rc-field-form/lib/Field';
import type { FormProps as RcFormProps, FormInstance } from 'rc-field-form';
import clsx from 'clsx';
import Cell from './Cell';
import Space from './Space';
import Toast from './Toast';
export type { FormInstance } from 'rc-field-form';
import { attachPropertiesToComponent } from './util';
import type { Props as CellProps } from './Cell';
import styled from 'styled-components';

const StyledCell = styled(Cell)`
  padding-left: unset;
  .cell-inner {
    padding: 0;
  }
`;

const FormItem: React.FC<FormItemProps> = (props) => {
  const { requiredMark, cellProps } = useContext(FormContext) || {};
  const { children, label, name, ...fieldProps } = props;

  let required = false;
  if ('rules' in fieldProps) {
    const rules = fieldProps.rules;
    if (Array.isArray(rules)) {
      required = rules.some((rule) => {
        if (rule && typeof rule === 'object' && rule.required) {
          return true;
        }
        return false;
      });
    }
  }

  return (
    <StyledCell
      label={label}
      data-name={name}
      required={requiredMark && required}
      {...cellProps}
      lineColor="transparent"
    >
      {name ? (
        <Field name={name} {...fieldProps}>
          {children}
        </Field>
      ) : React.isValidElement(children) ? (
        React.cloneElement(children, fieldProps)
      ) : (
        children
      )}
    </StyledCell>
  );
};

/** 排列方式 */
type FormLayout = 'vertical' | 'horizontal';

type FormContextType = {
  /** 是否显示星号，当rules包含required时，默认true */
  requiredMark?: boolean;
  cellProps?: CellProps;
};

export type FormProps = Partial<RcFormProps> & {
  /** 控件和控件距离, 默认16 */
  gap?: number;
  /** 字段没有通过验证是否提示错误 */
  toastError?: boolean;
  /** 是否平滑滚动到错误字段 */
  scrollIntoErrorField?: boolean;
  /** 排列方式
   *
   * @default vertical
   */
  layout?: FormLayout;
  className?: string;
  style?: React.CSSProperties;
  cellProps?: CellProps;
} & FormContextType;

type FormItemProps = FieldProps & CellProps;

export const FormContext = React.createContext<FormContextType>(null);

/** 表单 */
const Form = React.forwardRef<FormInstance, FormProps>((props, ref) => {
  const {
    children,
    gap = 16,
    requiredMark = true,
    layout = 'vertical',
    className,
    onFinishFailed,
    toastError,
    scrollIntoErrorField,
    cellProps,
    ...rest
  } = props;
  return (
    <RcForm
      {...rest}
      ref={ref}
      className={clsx('uc-form', className)}
      onFinishFailed={(errInfo) => {
        if (toastError) {
          Toast.show(errInfo.errorFields[0].errors[0]);
        }
        if (scrollIntoErrorField) {
          const name = errInfo.errorFields[0].name[0];
          const el = document.querySelector(`[data-name=${name}]`);
          if (el instanceof HTMLElement) {
            el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
        onFinishFailed?.(errInfo);
      }}
    >
      <FormContext.Provider
        value={{
          requiredMark,
          cellProps,
        }}
      >
        <Space direction={layout} wrap size={gap} style={{ width: '100%' }}>
          {children}
        </Space>
      </FormContext.Provider>
    </RcForm>
  );
});

FormItem.displayName = 'UC-FormItem';

Form.displayName = 'UC-Form';

export default attachPropertiesToComponent(Form, { /** 表单项 */ Item: FormItem });

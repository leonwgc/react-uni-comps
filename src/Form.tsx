import React, { useContext } from 'react';
import { Field, default as RcForm } from 'rc-field-form';
import type { FieldProps } from 'rc-field-form/lib/Field';
import type { FormProps as RcFormProps, FormInstance } from 'rc-field-form';
import clsx from 'clsx';
import Cell from './Cell';
import Space from './Space';
import Toast from './Toast';

/** 排列方式 */
type FormLayout = 'vertical' | 'horizontal';

type FormContextType = {
  /** 标题宽度,默认80*/
  labelWidth?: number;
  /** 是否显示星号，当rules包含required时，默认true */
  requiredMark?: boolean;
};

export type FormProps = RcFormProps & {
  /** 控件和控件距离, 默认16 */
  gap?: number;
  /** 字段没有通过验证是否提示错误，默认false */
  toastError?: boolean;
  /** 排列方式 */
  layout: FormLayout;
  className?: string;
  style?: React.CSSProperties;
} & FormContextType;

type FormItemProps = FieldProps & {
  /** 标题 */
  label?: React.ReactNode;
};

export const FormContext = React.createContext<FormContextType>(null);

/** 表单 */
const Form: React.ForwardRefExoticComponent<FormProps> & {
  /** 表单项 */
  Item?: (props: FormItemProps) => React.ReactElement;
} = React.forwardRef<FormInstance, FormProps>((props, ref) => {
  const {
    children,
    gap = 16,
    labelWidth = 80,
    requiredMark = true,
    layout = 'vertical',
    className,
    onFinishFailed,
    toastError = false,
    ...rest
  } = props;
  return (
    <RcForm
      {...rest}
      ref={ref}
      className={clsx('uc-form', className)}
      onFinishFailed={(errInfo) => {
        if (toastError) {
          try {
            Toast.show(errInfo.errorFields[0].errors[0]);
          } catch (ex) {}
        }
        onFinishFailed?.(errInfo);
      }}
    >
      <FormContext.Provider
        value={{
          labelWidth,
          requiredMark,
        }}
      >
        <Space direction={layout} size={gap} style={{ width: '100%' }}>
          {children}
        </Space>
      </FormContext.Provider>
    </RcForm>
  );
});

const FormItem = (props: FormItemProps) => {
  const { labelWidth, requiredMark } = useContext(FormContext);
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
    <Cell labelWidth={labelWidth} label={label} required={requiredMark && required}>
      <Field name={name} {...fieldProps}>
        {children}
      </Field>
    </Cell>
  );
};

FormItem.displayName = 'UC-FormItem';

Form.displayName = 'UC-Form';

Form.Item = FormItem;

export default Form;

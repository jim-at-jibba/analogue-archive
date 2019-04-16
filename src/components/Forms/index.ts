export { default as Checkbox } from "./Checkbox";
export { default as Field } from "./Field";
export { default as FieldError } from "./FieldError";
export { default as Form } from "./Form";
export { default as Input } from "./Input";
export { default as Label } from "./Label";
export { default as Radio } from "./Radio";
export { default as Range } from "./Range";
export { default as Select } from "./Select";
export { default as TextArea } from "./TextArea";

import { FormikActions, FormikValues } from "formik";
import { MutableRefObject, ReactNode } from "react";
import * as yup from "yup";

export interface IFormProps {
  ref?: MutableRefObject<IFormField>;
  submitButtonText?: string;
  onSubmit: (values: FormikValues, formikActions: FormikActions<FormikValues>) => void;
  fields: IFormField[];
  submitting: boolean;
  error: string | null;
  children?: ReactNode;
}
export interface IFormField {
  type: FieldTypes;
  name: string;
  label: string;
  value?: FormFieldvalue;
  error?: string;
  validation?: yup.StringSchema | yup.ArraySchema<any>;
  options?: Array<IFormOption>;
  range?: number[];
  reverse?: boolean;
  fieldLogic?: (value: any) => void;
  hidden?: (values: any) => boolean;
  inputType?: InputType;
  placeholder?: string;
}

export interface IFormBase {
  name: string;
  label: string;
  error?: string;
  value?: FormFieldvalue;
  validation?: yup.StringSchema | yup.ArraySchema<yup.AnySchemaConstructor>;
  handleChange(e: React.ChangeEvent<any>): void;
  handleBlur?(e: React.FocusEvent<any>): void;
  fieldLogic?: (value: any) => void;
}

export type InputType = "text" | "password" | "date" | "time" | "number";

export interface IFormInput extends IFormBase {
  inputType?: InputType;
  placeholder?: string;
}

export interface IFormRange {
  name: string;
  label: string;
  error?: string;
  handleChange(e: React.ChangeEvent<any>): void;
  handleBlur(e: React.FocusEvent<any>): void;
  range: number[];
  value?: number;
}

export interface IFormCheckbox extends IFormBase {
  value: FormFieldvalue;
  setFieldValue(field: string, value: any): void;
  options: Array<IFormOption>;
}

export interface IFormLMAO extends IFormBase {
  setFieldValue(field: string, value: any): void;
}
export type LMAOValue = "L" | "M" | "A" | "O" | "N";

export interface IFormRadio extends IFormBase {
  options: Array<IFormOption>;
}

export interface IFormTextArea extends IFormBase {}

export interface IFormSelect extends IFormBase {
  options: Array<IFormOption>;
}

export interface IFormTimePicker extends IFormBase {
  setFieldValue(field: string, value: any): void;
}

export interface IFormOption {
  value: string;
  text: string;
  checked?: boolean;
}
export type FieldTypes = "input" | "textarea" | "select" | "radio" | "checkbox" | "range" | "time" | "LMAO" | "title";

export type FormFieldvalue = string | string[] | number;

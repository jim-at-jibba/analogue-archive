import * as React from "react";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Range from "./Range";
import { IFormField } from ".";
import Grid from "hedron";
import styled from "@Utils/styled-components";
// import Text from "@Components/Text";

const Field: React.SFC<{
  value: string[] | string;
  field: IFormField;
  setFieldValue(field: string, value: any): void;
  handleBlur(e: React.FocusEvent<any>): void;
  handleChange(e: React.ChangeEvent<any>): void;
  hidden: boolean;
}> = ({ field, handleChange, handleBlur, setFieldValue, value, hidden }) => {
  let Field;
  switch (field.type) {
    case "input":
      Field = (
        <Input
          validation={field.validation}
          handleBlur={handleBlur}
          handleChange={handleChange}
          name={field.name}
          label={field.label}
          error={field.error}
          inputType={field.inputType}
          placeholder={field.placeholder}
          value={value}
        />
      );
      break;
    case "select":
      Field = (
        <Select
          handleBlur={handleBlur}
          handleChange={handleChange}
          name={field.name}
          label={field.label}
          error={field.error}
          options={field.options ? field.options : []}
          fieldLogic={field.fieldLogic}
        />
      );
      break;
    case "textarea":
      Field = <TextArea handleBlur={handleBlur} handleChange={handleChange} name={field.name} label={field.label} error={field.error} />;
      break;
    case "checkbox":
      Field = (
        <Checkbox
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={value}
          setFieldValue={setFieldValue}
          name={field.name}
          label={field.label}
          error={field.error}
          options={field.options ? field.options : []}
        />
      );
      break;

    case "radio":
      Field = (
        <Radio
          handleBlur={handleBlur}
          handleChange={handleChange}
          name={field.name}
          label={field.label}
          error={field.error}
          options={field.options ? field.options : []}
        />
      );
      break;
    case "range":
      Field = (
        <Range
          range={field.range ? field.range : [0, 10]}
          handleBlur={handleBlur}
          handleChange={handleChange}
          name={field.name}
          label={field.label}
          error={field.error}
        />
      );
      break;
    default:
      Field = <></>;
  }

  return (
    <FieldWrapper
      direction="vertical"
      style={{
        display: hidden ? "none" : "block"
      }}
    >
      {Field}
    </FieldWrapper>
  );
};

const FieldWrapper = styled(Grid.Bounds)`
  margin-top: ${({ theme }) => theme.spacing.margins.lg};
`;

export default Field;

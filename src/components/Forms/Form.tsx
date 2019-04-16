import * as React from "react";
import { Formik } from "formik";
import Field from "./Field";
import * as yup from "yup";
import styled from "@Utils/styled-components";
import Button from "../Button/Button";
import { Text } from "@Components/Text";
import { IFormProps } from ".";
import Grid from "hedron";
const FormError = styled.div`
  background: ${({ theme }) => theme.colors.error};
  opacity: 0.7;
  padding: ${({ theme }) => theme.spacing.padding.sm};
  margin-bottom: ${({ theme }) => theme.spacing.margins.sm};
  box-sizing: border-box;
  font-style: italic;
`;

const Form: React.SFC<IFormProps> = (props, ref) => {
  // get the initial value for the form
  const initialValues = props.fields.reduce<{ [key: string]: any }>((map, field) => {
    let value = field.value || "";

    if (field.options && field.type === "checkbox") {
      const values: string[] = [];
      field.options.forEach(opt => {
        if (opt.checked) {
          values.push(opt.text);
        }
      });
      value = values;
    }

    if (field.name) {
      map[field.name] = value;
    }
    return map;
  }, {});

  const validationRules = props.fields.reduce<any>((map, field) => {
    map[field.name] = field.validation || null;
    return map;
  }, {});

  return (
    <Formik
      ref={ref}
      onSubmit={async (values, actions) => props.onSubmit(values, actions)}
      initialValues={initialValues}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={yup.object().shape(validationRules)}
    >
      {({ handleSubmit, errors, handleChange, handleBlur, setFieldValue, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            {props.error && (
              <FormError>
                <Text weight="bold" color="white">
                  {props.error}
                </Text>
              </FormError>
            )}
            {props.fields.map(field => {
              //@ts-ignore
              field.error = errors[field.name];

              return (
                <Field
                  key={field.name}
                  field={field}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  value={values[field.name] || ""}
                  hidden={field.hidden ? field.hidden(values) : false}
                />
              );
            })}
            {props.children}
            <ButtonWrapper halign="center">
              <Button disabled={props.submitting} type="submit" color="white" background="accentDark" style={{ width: "100px" }}>
                {props.submitting ? "Submitting..." : props.submitButtonText || "Submit"}
              </Button>
            </ButtonWrapper>
          </form>
        );
      }}
    </Formik>
  );
};

const ButtonWrapper = styled(Grid.Bounds)`
  margin-top: ${({ theme }) => theme.spacing.margins.lg};
`;

export default React.forwardRef(Form);

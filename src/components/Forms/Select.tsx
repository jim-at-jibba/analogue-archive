import * as React from "react";
import styled from "@Utils/styled-components";
import Grid from "hedron";
import FieldError from "./FieldError";
import Label from "./Label";
import { Field as FormikField } from "formik";
import { IFormSelect } from ".";
const SelectStyled = styled(FormikField).attrs({
  component: "select"
})`
  outline: none;
  border: none;
  height: 40px;
  width: 100%;
  font-size: 20px;
  line-height: 35px;
  box-sizing: border-box;
`;

const OptionStyled = styled.option``;

const Select: React.SFC<IFormSelect> = props => {
  return (
    <>
      <Grid.Box>
        <Label for={props.name} label={props.label} />
      </Grid.Box>
      <Grid.Box>
        <SelectStyled
          onChange={(e: React.ChangeEvent<any>) => {
            if (props.fieldLogic) props.fieldLogic(e.target.value);
            props.handleChange(e);
          }}
          name={props.name}
        >
          <OptionStyled value="">Please Select</OptionStyled>
          {props.options.map((opt, index) => (
            <OptionStyled key={`${props.name}-${index}`} value={opt.value}>
              {opt.text}
            </OptionStyled>
          ))}
        </SelectStyled>
      </Grid.Box>
      {props.error && (
        <Grid.Box>
          <FieldError>{props.error}</FieldError>
        </Grid.Box>
      )}
    </>
  );
};

export default Select;

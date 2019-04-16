import * as React from "react";
import styled, { css } from "@Utils/styled-components";
import Grid from "hedron";
import FieldError from "./FieldError";
import Label from "./Label";
import { Text } from "@Components/Text";
import { IFormRange } from ".";
import { Field as FormikField } from "formik";
const thumbStyles = css`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primaryDark};
  cursor: pointer;
`;

const trackStyles = css`
  width: 100%;
  height: 5px;
  margin: 0;
  cursor: pointer;
  animate: 0.5s;
  background: ${({ theme }) => theme.colors.accentDark};
`;

const RangeStyled = styled(FormikField).attrs({ type: "range" })`
  margin-bottom: ${({ theme }) => theme.spacing.padding.medium};
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  width: 100%;
  background: transparent;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  :focus {
    outline: none;
  }

  ::-ms-track {
    width: 100%;
    cursor: pointer;

    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${thumbStyles}
    margin-top: -11px;
  }

  ::-moz-range-thumb {
    ${thumbStyles}
  }

  ::-ms-thumb {
    ${thumbStyles}
  }

  ::-moz-range-track {
    ${trackStyles}
  }

  ::-webkit-slider-runnable-track {
    ${trackStyles}
  }

  ::-ms-track {
    ${trackStyles}
    border-color: transparent;
    background: transparent;
  }

  ::-ms-fill-lower,
  ::-ms-fill-upper {
    background: ${({ theme }) => theme.colors.accentDark};
  }
`;

const Range: React.SFC<IFormRange> = props => {
  return (
    <>
      <Grid.Box>
        <Label for={props.name} label={props.label} />
      </Grid.Box>
      <Grid.Box>
        <Grid.Bounds direction="horizontal">
          <Grid.Box shiftLeft>
            <Text weight="bold">Disagree</Text>
          </Grid.Box>
          <Grid.Box shiftRight>
            <Text weight="bold">Agree</Text>
          </Grid.Box>
        </Grid.Bounds>
      </Grid.Box>
      <Grid.Box>
        <RangeStyled
          id={props.name}
          name={props.name}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          min={props.range[0]}
          max={props.range[1]}
        />
      </Grid.Box>
      {props.error && (
        <Grid.Box>
          <FieldError>{props.error}</FieldError>
        </Grid.Box>
      )}
    </>
  );
};

export default Range;

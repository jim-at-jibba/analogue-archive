import styled, { css } from '@Utils/styled-components';
import { Field as FormikField } from 'formik';
import Grid from 'hedron';
import * as React from 'react';

import { IFormInput } from '.';
import FieldError from './FieldError';
import Label from './Label';

const InputStyled = styled(FormikField)`
  outline: none;
  border: none;
  height: 40px;
  width: 100%;
  font-size: 20px;
  line-height: 35px;

  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.lightGrey};
    color: ${theme.fonts.colors.primary};

    &:-webkit-autofill {
      background: ${theme.colors.white};
      -webkit-text-fill-color: ${theme.fonts.colors.primary};
      -webkit-transition-delay: 99999s;
    }
  `};

  box-sizing: border-box;
  max-width: 400px;
`;

const Input: React.SFC<IFormInput> = ({
  label,
  name,
  inputType,
  placeholder,
  handleBlur,
  handleChange,
  error,
  value,
}) => {
  return (
    <>
      {(!placeholder || value) && (
        <Grid.Box>
          <Label for={name} label={label} />
        </Grid.Box>
      )}
      <Grid.Box>
        <InputStyled
          id={name}
          name={name}
          type={inputType || 'text'}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          value={value}
        />
      </Grid.Box>
      {error && (
        <Grid.Box>
          <FieldError>{error}</FieldError>
        </Grid.Box>
      )}
    </>
  );
};

export default Input;

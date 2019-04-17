import * as React from 'react';
import styled from '../../lib/styled-components';
import Grid from 'hedron';
import FieldError from './FieldError';
import Label from './Label';
import { Field as FormikField } from 'formik';
import { IFormTextArea } from '.';

const TextAreaStyled = styled(FormikField).attrs({ component: 'textarea' })`
  background: ${({ theme }) => theme.colors.white};
  outline: none;
  border: none;
  height: 100px;
  width: 100%;
  font-size: 20px;
  line-height: 35px;
  padding: ${({ theme }) => theme.spacing.padding.small};
  margin-bottom: ${({ theme }) => theme.spacing.padding.medium};
  box-sizing: border-box;
`;

const TextArea: React.SFC<IFormTextArea> = props => {
  return (
    <>
      <Grid.Box>
        <Label for={props.name} label={props.label} />
      </Grid.Box>
      <Grid.Box>
        <TextAreaStyled
          id={props.name}
          name={props.name}
          onChange={props.handleChange}
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

export default TextArea;

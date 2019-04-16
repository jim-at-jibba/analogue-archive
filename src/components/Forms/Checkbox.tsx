import styled from '@Utils/styled-components';
import { FieldArray } from 'formik';
import Grid from 'hedron';
import * as React from 'react';
import { IFormCheckbox } from '.';
import FieldError from './FieldError';
import Label from './Label';

export const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  :before {
    content: '';
    background: #fff;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 5px;
  }
`;

const CheckboxLabel = styled(Label)`
  display: flex;

  span {
    padding-left: 10px;
    line-height: 20px;
  }
`;

const Checkbox: React.SFC<IFormCheckbox> = props => {
  return (
    <>
      <Grid.Box>
        <Label for={props.name} label={props.label} />
      </Grid.Box>
      <Grid.Box>
        <FieldArray
          name={props.name}
          render={arrayHelpers =>
            props.options.map((opt, index) => (
              <Grid.Bounds
                key={`${props.name}-${index}`}
                valign="top"
                direction="horizontal"
                style={{ position: 'relative' }}
              >
                <Grid.Box>
                  <CheckboxLabel
                    for={`${props.name}-${index}`}
                    label={opt.text}
                  >
                    <CheckboxStyled
                      onChange={e => {
                        if (e.target.checked) {
                          arrayHelpers.push(opt.value);
                        } else {
                          if (typeof props.value !== 'number') {
                            const idx = props.value.indexOf(opt.value);
                            arrayHelpers.remove(idx);
                          }
                        }
                      }}
                      name={props.name}
                      id={`${props.name}-${index}`}
                      defaultChecked={opt.checked}
                    />
                  </CheckboxLabel>
                </Grid.Box>
              </Grid.Bounds>
            ))
          }
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

export default Checkbox;

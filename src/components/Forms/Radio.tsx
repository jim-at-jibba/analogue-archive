// @ts-ignore
import * as React from 'react';
import styled from '../../lib/styled-components';
import Grid from 'hedron';
import FieldError from './FieldError';
import Label from './Label';
import { IFormRadio } from '.';
const RadioStyled = styled.input.attrs({ type: 'radio' })`
  width: 20px;
  height: 20px;
  :before {
    content: '';
    background: #fff;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.accentLight};
  }

  :hover:before {
    background: ${({ theme }) => theme.colors.primaryLight};
  }

  :checked:before {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const RadioLabel = styled(Label)`
  display: flex;

  span {
    padding-left: 10px;
    line-height: 20px;
  }
`;

const Radio: React.SFC<IFormRadio> = props => {
  return (
    <>
      <Grid.Box>
        <Label for={props.name} label={props.label} />
      </Grid.Box>
      <Grid.Box>
        {props.options.map((opt, index) => (
          <Grid.Bounds
            key={`${props.name}-${index}`}
            valign="top"
            direction="horizontal"
            style={{ position: 'relative' }}
          >
            <Grid.Box>
              <RadioLabel for={`${props.name}-${index}`} label={opt.text}>
                <RadioStyled
                  onChange={props.handleChange}
                  name={props.name}
                  id={`${props.name}-${index}`}
                  defaultChecked={opt.checked}
                  value={opt.value}
                />
              </RadioLabel>
            </Grid.Box>
          </Grid.Bounds>
        ))}
      </Grid.Box>
      {props.error && (
        <Grid.Box>
          <FieldError>{props.error}</FieldError>
        </Grid.Box>
      )}
    </>
  );
};

export default Radio;

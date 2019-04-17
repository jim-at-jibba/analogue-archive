import * as React from 'react';
import styled from '../../lib/styled-components';

const LabelWrapper = styled('label')`
  color: ${({ theme }) => theme.fonts.colors.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.h5};
`;

const Label: React.SFC<{
  for: string;
  label: string;
  className?: string;
}> = props => (
  <LabelWrapper htmlFor={props.for} className={props.className}>
    {props.children}
    <p>{props.label}</p>
  </LabelWrapper>
);

export default Label;

// @ts-ignore
import * as React from 'react';
import styled from '../../lib/styled-components';
// import Text from "../Text/Text";

const FieldError = styled('span').attrs({ fontSize: 'h6' })`
  color: ${({ theme }) => theme.colors.error};
  font-style: italic;
`;

export default FieldError;

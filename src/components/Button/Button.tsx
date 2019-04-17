import * as React from 'react';
import styled from '../../lib/styled-components';
import { Colors } from '../../lib/theme';

export interface IButtonProps {
  children: React.ReactChild;
  background?: keyof Colors;
  color?: keyof Colors;
  borderColor?: keyof Colors;
  hoverStyles?: React.CSSProperties;
}

const Button = styled('button')<IButtonProps>`
  outline: none;
  cursor: pointer;

  ${({ theme, background, color, borderColor }) => `
  font-size: ${theme.fonts.sizes.p};
  background: ${theme.colors[background || 'primaryDark']};
  font-weight: ${theme.fonts.weights.normal};
  color: ${theme.colors[color || 'white']};
  border: ${borderColor ? `2px solid ${theme.colors[borderColor]}` : 'none'};
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing.padding.sm} ${theme.spacing.padding.md};
  transition: ${theme.transition};`}

  :hover {
    ${({ hoverStyles }) => (hoverStyles ? { ...hoverStyles } : `opacity: 0.8`)};
  }
`;

Button.defaultProps = {
  background: 'primaryDark',
};

export default Button;

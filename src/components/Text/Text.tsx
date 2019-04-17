import * as React from 'react';
import styled, { css } from '../../lib/styled-components';
import {
  FontSizes,
  FontWeights,
  FontColors,
  FontSpacing,
} from '../../lib/theme';
import TruncateMarkup, { TruncateProps } from 'react-truncate-markup';

export interface ITextProps {
  children: React.ReactNode;
  fontSize?: keyof FontSizes;
  weight?: keyof FontWeights;
  color?: keyof FontColors;
  letterSpacing?: keyof FontSpacing;
  style?: React.CSSProperties;
}

export const TextStyles = css<ITextProps>`
  ${({ theme, fontSize, color, weight, letterSpacing }) => {
    return `
      letter-spacing: ${theme.fonts.spacing[letterSpacing || 'normal']};
      font-size: ${theme.fonts.sizes[fontSize || 'p']};
      color: ${theme.fonts.colors[color || 'primary']};
      font-weight: ${theme.fonts.weights[weight || 'normal']};
    `;
  }}
  line-height: 1.7;
`;

export const Text = styled.span`
  ${TextStyles}
`;

interface ITextTruncateProps extends ITextProps {
  truncateProps?: TruncateProps;
}

export const TextTruncate: React.SFC<ITextTruncateProps> = props => {
  return (
    <TruncateMarkup {...props.truncateProps}>
      <Text {...props}>{props.children}</Text>
    </TruncateMarkup>
  );
};

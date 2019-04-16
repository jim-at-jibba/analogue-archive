import * as React from "react";
import styled from "@Utils/styled-components";
import { Text } from "@Components/Text";

const LabelWrapper = styled("label")`
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
    <Text>{props.label}</Text>
  </LabelWrapper>
);

export default Label;

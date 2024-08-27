import styled from "styled-components";
import { configStyle } from "../config";
import { TextProps } from "./text.type";
import { systemStyles } from "../common";

export const Text = styled.span.withConfig(configStyle)<TextProps>`
  ${systemStyles}
`;

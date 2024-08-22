import styled from "styled-components";
import { BoxProps } from "./box.type";
import { systemStyles } from "../common";
import { configStyle } from "../config";

export const Box = styled.div.withConfig(configStyle)<BoxProps>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${systemStyles};
`;

import styled from "styled-components";
import { configStyle } from "../config";
import { GlassBoxProps } from "./glassBox.type";
import { systemStyles } from "../common";

export const GlassBox = styled.div.withConfig(configStyle)<GlassBoxProps>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  ${systemStyles};
`;

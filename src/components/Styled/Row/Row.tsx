import styled from "styled-components";
import { RowProps } from "./row.type";
import { systemStyles } from "../common";
import { configStyle } from "../config";

export const Row = styled.div.withConfig(configStyle)<RowProps>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${systemStyles};
`;

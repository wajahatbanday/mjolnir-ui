import styled from "styled-components";
import { configStyle } from "../config";
import { HoverBoxProps } from "./hoverBox.type";

export const HoverBox = styled.div.withConfig(configStyle)<HoverBoxProps>`
  &:hover {
    background-color: ${(props) => props.hoverColor || "#b4b4b4"};
    cursor: pointer;
  }
`;

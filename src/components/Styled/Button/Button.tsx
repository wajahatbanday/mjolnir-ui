import styled from "styled-components";
import { configStyle } from "../config";
import { systemStyles } from "../common";
import { ButtonProps } from "./button.type";

export const Button = styled.button.withConfig(configStyle)<ButtonProps>`
  cursor: pointer;
  &:hover {
    background-color: grey;
    color: black;
  }
  ${systemStyles}
`;

import styled from "styled-components";
import { configStyle } from "../config";
import { systemStyles } from "../common";
import { ButtonProps } from "./button.type";

export const Button = styled.button.withConfig(configStyle)<ButtonProps>`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: grey;
    color: black;
  }
  ${systemStyles}
`;

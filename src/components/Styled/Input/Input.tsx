import styled from "styled-components";

import { configStyle } from "../config";
import { systemStyles } from "../common";
import { InputBoxProps } from "./input.type";

export const StyledInputBox = styled.input.withConfig(
  configStyle
)<InputBoxProps>`
  outline: none;
  font-size: 15px;
  &::placeholder {
    color: ${(props) => props.placeholderColor || "#7d7d7d"};
    font-size: 18;
  }
  &::-webkit-file-upload-button {
    cursor: "pointer";
    border: "none";
    border-radius: 5px;
    margin-right: 15px;
    padding-left: 15px;
    padding-right: 15px;
  }
  ${systemStyles}
`;

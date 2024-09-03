import styled from "styled-components";
import { configStyle } from "../config";
import { TextAreaProps } from "./textArea.type";
import { systemStyles } from "../common";

export const TextArea = styled.textarea.withConfig(configStyle)<TextAreaProps>`
  min-height: 100px;
  ${systemStyles}
  &::placeholder {
    color: ${(props) => props.placeholderColor || "#000"};
    font-size: 18px;
  }
`;

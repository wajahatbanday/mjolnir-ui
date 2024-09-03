import { ChangeEvent } from "react";
import {
  WidthProps,
  HeightProps,
  ColorProps,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  BorderProps,
  BackgroundProps,
  PositionProps,
  ShadowProps,
} from "styled-system";

export type TextAreaProps = BackgroundProps &
  WidthProps &
  HeightProps &
  ColorProps &
  SpaceProps &
  TypographyProps &
  LayoutProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  ShadowProps & {
    placeholderColor?: string;
    type?: string;
    name?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    value?: any;
    placeholder?: string;
    height?: string;
    borderRadius?: string;
  };

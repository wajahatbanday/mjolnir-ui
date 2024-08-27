import {
  BackgroundProps,
  BorderProps,
  LayoutProps,
  WidthProps,
  HeightProps,
} from "styled-system";

export type InputBoxProps = BackgroundProps &
  BorderProps &
  LayoutProps &
  WidthProps &
  HeightProps & {
    placeholderColor?: string;
    height?: string;
    borderRadius?: string;
  };

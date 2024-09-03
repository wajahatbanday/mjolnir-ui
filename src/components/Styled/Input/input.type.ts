import {
  BackgroundProps,
  BorderProps,
  LayoutProps,
  WidthProps,
  HeightProps,
  BackgroundColorProps,
  BorderRadiusProps,
  FlexboxProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export type InputBoxProps = BackgroundProps &
  TypographyProps &
  BorderProps &
  FlexboxProps &
  PositionProps &
  BackgroundColorProps &
  ShadowProps &
  BorderRadiusProps &
  SpaceProps &
  LayoutProps &
  WidthProps &
  HeightProps & {
    placeholderColor?: string;
    height?: string;
    borderRadius?: string;
  };

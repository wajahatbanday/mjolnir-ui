import {
  style,
  borderRadius,
  flexbox,
  compose,
  backgroundColor,
  height,
  width,
  space,
  color,
  typography,
  layout,
  border,
  background,
  position,
  shadow,
  system,
} from "styled-system";

export const gap = style({
  prop: "gap",
  key: "space",
  scale: "space",
});

export const systemStyles = compose(
  space,
  layout,
  typography,
  color,
  background,
  border,
  flexbox,
  position,
  borderRadius,
  gap,
  shadow,
  backgroundColor,
  width,
  height,
  system
);

import {
  style,
  space,
  borderRadius,
  layout,
  typography,
  color,
  background,
  border,
  flexbox,
  position,
  compose,
  shadow,
  backgroundColor,
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
  backgroundColor
);

import {
  ComponentBaseProps,
  CursorProps,
  OverflowProps,
  ResponsiveStyleProps,
} from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

export type FlexDirectionType =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";

export type AxisAlignmentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline";

export type JustifyContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around";

export type FlexWrapType = "nowrap" | "wrap" | "wrap-reverse";

interface FlexOptions {
  width?: string;
  height?: string;
  direction?: ResponsiveStyleProps<FlexDirectionType>;
  alignment?: ResponsiveStyleProps<AxisAlignmentType>;
  justify?: JustifyContentType;
  flexWrap?: FlexWrapType;
  gap?: ResponsiveStyleProps;
  onClick?: MouseEventHandler;
}

export interface FlexProps
  extends ComponentBaseProps,
    OverflowProps,
    CursorProps,
    FlexOptions {}

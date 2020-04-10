import { Theme } from '@material-ui/core';
import { Shape } from '@material-ui/core/styles/shape';

export interface MuiVegaShape extends Shape {
  barCornerRadius: number;
}

export interface VegaTooltipOptions {
  offsetX?: number;
  offsetY?: number;
  maxDepth?: number;
}

export const defaultVegaTooltipOptions: VegaTooltipOptions = {
  offsetX: 10,
  offsetY: 10,
  maxDepth: 2
};

export interface MuiVegaTheme extends Theme {
  shape: MuiVegaShape;
  vegaTooltip?: VegaTooltipOptions;
}

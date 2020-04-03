import { Theme } from '@material-ui/core';
import { Shape } from '@material-ui/core/styles/shape';

export interface MuiVegaShape extends Shape {
  barCornerRadius: number;
}

export interface MuiVegaTheme extends Theme {
  shape: MuiVegaShape;
}

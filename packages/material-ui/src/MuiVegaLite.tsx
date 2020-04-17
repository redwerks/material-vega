import React, { FC } from 'react';
import { MuiVega, MuiVegaProps } from './MuiVega';

export type MuiVegaLiteProps = Omit<MuiVegaProps, 'mode'>;

/**
 * <VegaLite> from react-vega but with a Material UI integrated theme
 */
export const MuiVegaLite: FC<MuiVegaLiteProps> = (props: MuiVegaLiteProps) => {
  return <MuiVega {...props} mode="vega-lite" />;
};

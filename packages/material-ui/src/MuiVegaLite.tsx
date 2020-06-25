import React, { forwardRef, Ref } from 'react';
import { MuiVega, MuiVegaProps } from './MuiVega';
import { Vega } from 'react-vega';

export type MuiVegaLiteProps = Omit<MuiVegaProps, 'mode'>;

/**
 * <VegaLite> from react-vega but with a Material UI integrated theme
 */
export const MuiVegaLite = forwardRef(
  (props: MuiVegaLiteProps, ref: Ref<Vega>) => {
    return <MuiVega ref={ref} {...props} mode="vega-lite" />;
  }
);
MuiVegaLite.displayName = 'MuiVegaLite';

import React, { FC } from 'react';
import { useMemo } from 'react';
import { mergeConfig } from 'vega';
import { VegaLite } from 'react-vega';
import { VegaProps } from 'react-vega/lib/Vega';
import { createTheme, ThemeTypes } from '../../core/src';

export type MuiVegaProps = VegaProps & {
  variant: ThemeTypes;
};

/**
 * <Vega> from react-vega but with a Material UI integrated theme
 */
export const MuiVega: FC<MuiVegaProps> = props => {
  const { variant, config: configProp, ...vegaProps } = props;

  if (typeof configProp === 'string') {
    throw new TypeError(
      '@material-vega/material-ui does not support a string `config`.'
    );
  }

  const config = useMemo(
    () =>
      mergeConfig(
        createTheme(
          {
            /* @fixme Add options */
          },
          variant
        ),
        configProp || {}
      ),
    []
  );

  return <VegaLite config={config} {...vegaProps} />;
};

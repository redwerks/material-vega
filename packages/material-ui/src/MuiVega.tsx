import React, { FC } from 'react';
import { useMemo } from 'react';
import { mergeConfig } from 'vega';
import { VegaLite } from 'react-vega';
import { VegaProps } from 'react-vega/lib/Vega';
import { useTheme } from '@material-ui/core';
import { createTheme, ThemeTypes, MaterialVegaOptions } from '../../core/src';
import { MuiVegaTheme } from './MuiVegaTheme';

export type MuiVegaProps = VegaProps & {
  variant: ThemeTypes;
  color?: 'primary' | 'secondary' | 'error' | 'warning';
  background?: 'transparent' | 'paper' | 'default';
  themeOptions?: Partial<MaterialVegaOptions>;
};

/**
 * <Vega> from react-vega but with a Material UI integrated theme
 */
export const MuiVega: FC<MuiVegaProps> = props => {
  const {
    variant,
    color = 'primary',
    background = 'transparent',
    config: configProp,
    themeOptions,
    ...vegaProps
  } = props;
  const theme = useTheme<MuiVegaTheme>();

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
            font: theme.typography.fontFamily,
            labelPadding: theme.spacing(1),
            textColor: theme.palette.text.primary,
            secondaryTextColor: theme.palette.text.secondary,
            dividerColor: theme.palette.divider,
            color: theme.palette[color].main,
            background:
              background === 'transparent'
                ? 'transparent'
                : theme.palette.background[background],
            barCornerRadius: theme.shape.barCornerRadius,
            thickDomainLineWidth: 2, // @todo Find a place in MuiVegaTheme to add an option for this
            ...themeOptions
          },
          variant
        ),
        configProp || {}
      ),
    [theme, color, themeOptions]
  );

  return <VegaLite config={config} renderer="svg" {...vegaProps} />;
};

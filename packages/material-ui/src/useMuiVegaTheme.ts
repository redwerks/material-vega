import { useTheme } from '@material-ui/core';
import { MaterialVegaOptions } from '@material-vega/core';
import { MuiVegaTheme } from './MuiVegaTheme';
import { useMemo } from 'react';

export interface MuiVegaThemePreferences {
  color?: 'primary' | 'secondary' | 'error' | 'warning';
  background?: 'transparent' | 'paper' | 'default';
}

/**
 * Get MaterialVegaOptions from the Material UI theme
 */
export function useMuiVegaOptions(
  prefs: MuiVegaThemePreferences
): MaterialVegaOptions {
  const { color, background } = prefs;
  const theme = useTheme<MuiVegaTheme>();

  return useMemo(
    () => ({
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
      thickDomainLineWidth: 2 // @todo Find a place in MuiVegaTheme to add an option for this
    }),
    [theme, color, background]
  );
}

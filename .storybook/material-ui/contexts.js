import React, { useMemo } from 'react';
import { ThemeProvider, createMuiTheme, colors, Box } from '@material-ui/core';

const ThemeContext = ({ theme: themeShade, primary, children }) => {
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themeShade,
          primary: primary
        }
      }),
    [themeShade, primary]
  );

  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} p={1} bgcolor="background.paper">
        {children}
      </Box>
    </ThemeProvider>
  );
};

export const contexts = [
  {
    icon: 'paintbrush',
    title: 'Theme',
    components: [ThemeContext],
    params: [
      {
        name: 'Light Theme',
        props: { theme: 'light', primary: colors.purple },
        default: true
      },
      {
        name: 'Light Theme (Teal)',
        props: { theme: 'light', primary: colors.teal }
      },
      { name: 'Dark Theme', props: { theme: 'dark', primary: colors.purple } }
    ]
  }
];

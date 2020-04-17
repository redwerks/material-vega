import React, { ReactElement } from 'react';
import { MuiVega as _MuiVega } from '..';

export default {
  title: 'Vega Material UI Vega/Components/MuiVega',
  component: _MuiVega
};
console.log(_MuiVega);
(window as any).MuiVega = _MuiVega;
export const MuiVega = (): ReactElement => null;

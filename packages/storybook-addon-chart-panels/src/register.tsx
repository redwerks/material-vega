import React from 'react';
import { addons, types } from '@storybook/addons';
import { ADDON_ID, ADDON_PANEL } from './constants';
import Chart from './chart';
import { AddonPanel } from '@storybook/components';

addons.register(ADDON_ID, api => {
  addons.add(ADDON_PANEL, {
    title: 'Chart Spec',
    type: types.PANEL,
    // eslint-disable-next-line react/display-name, react/prop-types
    render: ({ active, key }) => {
      return (
        <AddonPanel active={active} key={key}>
          <Chart api={api} active={active} />
        </AddonPanel>
      );
    }
  });
});

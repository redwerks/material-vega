import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { ADDON_ID, ADDON_PANEL } from './constants';
import OriginalPreview from './OriginalPreview';

addons.register(ADDON_ID, api => {
  addons.add(ADDON_PANEL, {
    title: 'Original Chart',
    type: types.PANEL,
    // eslint-disable-next-line react/display-name, react/prop-types
    render: ({ key, active }) => (
      <OriginalPreview key={key} active={active} api={api} />
    )
  });
});

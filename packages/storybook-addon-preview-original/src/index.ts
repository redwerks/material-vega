import merge from 'lodash.merge';
import { makeDecorator } from '@storybook/addons';
import { queryFromLocation } from '@storybook/router';

export const withOriginalPreview = makeDecorator({
  name: 'withOriginalPreview',
  parameterName: 'original',
  wrapper: (storyFn, context) => {
    const query = queryFromLocation(window.location);

    return storyFn(
      merge(context, {
        parameters: {
          skipTheme: query.addonPreviewOriginalDisplayMode === 'original'
        }
      })
    );
  }
});

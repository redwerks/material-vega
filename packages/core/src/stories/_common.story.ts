import { StoryContext, StoryFn } from '@storybook/addons';
import { Spec } from 'vega';
import { TopLevelSpec } from 'vega-lite';
import vegaEmbed from 'vega-embed';
import { ThemeTypes, createTheme } from '../theme';

export const chart = (
  spec: Spec | TopLevelSpec,
  theme: ThemeTypes
): StoryFn => {
  const Story = (c: StoryContext): HTMLElement => {
    const div = document.createElement('div');

    vegaEmbed(div, spec, {
      actions: !c.parameters.skipTheme,
      renderer: 'svg',
      config: c.parameters.skipTheme ? undefined : createTheme({}, theme)
    });

    return div;
  };
  Story.story = {
    parameters: {
      chart: {
        spec
      }
    }
  };

  return Story;
};

import addons, { makeDecorator } from '@storybook/addons';
import { EVENTS } from './constants';

export const withChart = makeDecorator({
  name: 'withChart',
  parameterName: 'chart',
  skipIfNoParametersOrOptions: true,
  wrapper: (storyFn, context, { parameters }) => {
    const channel = addons.getChannel();

    const id =
      parameters.id || context.parameters.id || context.parameters.__id;
    channel.emit(EVENTS.CHART, id, parameters.spec);

    return storyFn(context);
  }
});

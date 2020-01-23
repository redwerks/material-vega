import { chart } from './_common.story';
import {
  createVerticalBarChartTheme,
  createHorizontalBarChartTheme
} from '../';

export default { title: 'Bar Chart' };

export const Basic = chart(
  {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    width: 200,
    data: {
      values: [
        { quarter: 'Q1', percent: 0.2 },
        { quarter: 'Q2', percent: 0.28 },
        { quarter: 'Q3', percent: 0.32 },
        { quarter: 'Q4', percent: 0.39 }
      ]
    },
    mark: 'bar',
    encoding: {
      x: {
        field: 'quarter',
        type: 'nominal',
        axis: {
          ticks: false,
          title: null
        },
        band: 0.5
      },
      y: {
        field: 'percent',
        type: 'quantitative',
        axis: {
          format: 'p',
          orient: 'right',
          title: null
        }
      }
    }
  },
  createVerticalBarChartTheme
);

export const Horizontal = chart(
  {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    height: 150,
    data: {
      values: [
        { quarter: 'Q1', percent: 0.2 },
        { quarter: 'Q2', percent: 0.28 },
        { quarter: 'Q3', percent: 0.32 },
        { quarter: 'Q4', percent: 0.39 }
      ]
    },
    mark: 'bar',
    encoding: {
      x: {
        field: 'percent',
        type: 'quantitative',
        axis: {
          format: 'p',
          title: null
        }
      },
      y: {
        field: 'quarter',
        type: 'nominal',
        axis: {
          orient: 'left',
          title: null
        },
        band: 0.75
      }
    }
  },
  createHorizontalBarChartTheme
);

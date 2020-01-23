import { chart } from './_common.story';

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
  'verticalBarChart'
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
  'horizontalBarChart'
);

export const Focused = chart(
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
    layer: [
      {
        mark: 'bar'
      },
      {
        mark: { type: 'text', baseline: 'top', align: 'center', dy: 4, dx: -8 },
        encoding: {
          text: { field: 'percent', type: 'ordinal', format: '.0p' },
          color: {
            value: 'rgba(255, 255, 255, 1)'
          }
        }
      }
    ],
    encoding: {
      x: {
        field: 'quarter',
        type: 'nominal',
        axis: {
          title: null
        },
        band: 0.7
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
  'focusedVerticalBarChart'
);

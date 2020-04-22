import { chart } from './_common.story';

export default { title: 'Material Vega Core/Area Chart' };

export const Basic = chart(
  {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    width: 300,
    height: 200,
    data: {
      url:
        'https://vega.github.io/vega-lite/examples/data/unemployment-across-industries.json'
    },
    mark: 'area',
    encoding: {
      x: {
        timeUnit: 'yearmonth',
        field: 'date',
        type: 'temporal',
        axis: { format: '%Y' }
      },
      y: {
        aggregate: 'sum',
        field: 'count',
        type: 'quantitative'
      }
    }
  },
  'areaChart'
);

export const Stacked = chart(
  {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    description: 'Area chart showing weight of cars over time.',
    width: 300,
    height: 200,
    data: {
      url:
        'https://vega.github.io/vega-lite/examples/data/unemployment-across-industries.json'
    },
    mark: 'area',
    encoding: {
      x: {
        timeUnit: 'yearmonth',
        field: 'date',
        type: 'temporal',
        axis: { format: '%Y' }
      },
      y: {
        aggregate: 'sum',
        field: 'count',
        type: 'quantitative',
        axis: {
          orient: 'left',
          labelAlign: 'right'
        }
      },
      color: {
        field: 'series',
        type: 'nominal',
        scale: { scheme: 'category20b' }
      }
    },
    config: {
      legend: {
        orient: 'right'
      }
    }
  },
  'areaChart'
);

export const AreaLine = chart(
  {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    width: 300,
    height: 200,
    data: {
      url:
        'https://vega.github.io/vega-lite/examples/data/unemployment-across-industries.json'
    },
    mark: 'area',
    encoding: {
      x: {
        timeUnit: 'yearmonth',
        field: 'date',
        type: 'temporal',
        axis: { format: '%Y' }
      },
      y: {
        aggregate: 'sum',
        field: 'count',
        type: 'quantitative'
      }
    }
  },
  'areaLineChart'
);

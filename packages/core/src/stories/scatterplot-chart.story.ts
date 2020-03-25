import { chart } from './_common.story';

export default { title: 'Material Vega Core/Scatterplot Charts' };

export const Basic = chart(
  {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    description:
      'A scatterplot showing horsepower and miles per gallons for various cars.',
    data: { url: 'https://vega.github.io/vega-lite/examples/data/cars.json' },
    mark: 'point',
    encoding: {
      x: { field: 'Horsepower', type: 'quantitative' },
      y: { field: 'Miles_per_Gallon', type: 'quantitative' }
    }
  },
  'scatterplotChart'
);

export const Shapes = chart(
  {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    description: 'A scatterplot showing horsepower and miles per gallons.',
    data: { url: 'https://vega.github.io/vega-lite/examples/data/cars.json' },
    mark: 'point',
    encoding: {
      x: { field: 'Horsepower', type: 'quantitative' },
      y: { field: 'Miles_per_Gallon', type: 'quantitative' },
      color: { field: 'Origin', type: 'nominal' },
      shape: { field: 'Origin', type: 'nominal' }
    }
  },
  'scatterplotChart'
);

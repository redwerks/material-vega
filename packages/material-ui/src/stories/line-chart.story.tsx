import React, { ReactElement } from 'react';
import { MuiVegaLite } from '..';

export default { title: 'Vega Material UI Vega/Line Chart' };

export const Basic = (): ReactElement => (
  <MuiVegaLite
    variant="lineChart"
    spec={{
      $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
      description: "Google's stock price over time.",
      data: {
        url: 'https://vega.github.io/vega-lite/examples/data/stocks.csv'
      },
      transform: [{ filter: "datum.symbol==='GOOG'" }],
      mark: 'line',
      encoding: {
        x: { field: 'date', type: 'temporal' },
        y: {
          field: 'price',
          type: 'quantitative'
        }
      }
    }}
  />
);

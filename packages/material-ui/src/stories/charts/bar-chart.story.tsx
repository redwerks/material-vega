import React, { ReactElement } from 'react';
import { MuiVegaLite } from '../..';

export default {
  title: 'Vega Material UI/Charts/Bar Chart'
};

export const Basic = (): ReactElement => (
  <MuiVegaLite
    variant="verticalBarChart"
    spec={{
      $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
      width: { step: 55 },
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
            ticks: false
          },
          band: 0.5
        },
        y: {
          field: 'percent',
          type: 'quantitative',
          axis: {
            format: 'p'
          }
        }
      }
    }}
  />
);

export const Horizontal = (): ReactElement => (
  <MuiVegaLite
    variant="horizontalBarChart"
    spec={{
      $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
      height: { step: 55 },
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
            format: 'p'
          }
        },
        y: {
          field: 'quarter',
          type: 'nominal',

          band: 0.5
        }
      }
    }}
  />
);

export const Focused = (): ReactElement => (
  <MuiVegaLite
    variant="focusedVerticalBarChart"
    spec={{
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
          mark: {
            type: 'text',
            baseline: 'top',
            align: 'center',
            dy: 4,
            dx: -8
          },
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
          band: 0.7
        },
        y: {
          field: 'percent',
          type: 'quantitative',
          axis: {
            format: 'p'
          }
        }
      }
    }}
  />
);

import React, { ReactElement } from 'react';
import { MuiVegaLite } from '../..';

export default { title: 'Vega Material UI/Arc Charts/Donut Chart' };

export const Basic = (): ReactElement => (
  <MuiVegaLite
    variant="donutChart"
    spec={{
      $schema: 'https://vega.github.io/schema/vega/v5.json',
      width: 200,
      height: 200,
      data: [
        {
          name: 'table',
          values: [
            { id: 'A', field: 4 },
            { id: 'B', field: 6 },
            { id: 'C', field: 10 },
            { id: 'D', field: 3 },
            { id: 'E', field: 7 },
            { id: 'Other', field: 8 }
          ],
          transform: [
            {
              type: 'pie',
              field: 'field'
            }
          ]
        },
        {
          name: 'used',
          source: 'table',
          transform: [
            {
              type: 'formula',
              expr: "datum.id === 'Other' ? 'Other' : 'Main'",
              as: 'id'
            },
            {
              type: 'aggregate',
              fields: ['field'],
              groupby: ['id'],
              ops: ['sum'],
              as: ['sum']
            },
            {
              type: 'pivot',
              field: 'id',
              value: 'sum'
            }
          ]
        }
      ],
      scales: [
        {
          name: 'color',
          type: 'ordinal',
          domain: { data: 'table', field: 'id' },
          range: { scheme: 'category20' }
        }
      ],
      marks: [
        {
          type: 'arc',
          from: { data: 'table' },
          encode: {
            enter: {
              fill: { scale: 'color', field: 'id' },
              x: { signal: 'width / 2' },
              y: { signal: 'height / 2' },
              padAngle: { value: 0.01 }
            },
            update: {
              startAngle: { field: 'startAngle' },
              endAngle: { field: 'endAngle' },
              innerRadius: { signal: 'width / 2 - 10' },
              outerRadius: { signal: 'width / 2' }
            }
          }
        },
        {
          type: 'text',
          from: { data: 'used' },
          style: ['percent'],
          encode: {
            enter: {
              x: { signal: 'width / 2' },
              y: { signal: 'height / 2' },
              align: { value: 'center' },
              baseline: { value: 'middle' },
              fontSize: { value: 24 }
            },
            update: {
              text: {
                signal:
                  "format(datum.Main / (datum.Main + datum.Other), '0.0%')"
              }
            }
          }
        }
      ],
      legends: [
        {
          fill: 'color',
          direction: 'horizontal',
          encode: {
            labels: {
              name: 'legendLabel',
              enter: { text: { field: 'id' } }
            }
          }
        }
      ]
    }}
  />
);

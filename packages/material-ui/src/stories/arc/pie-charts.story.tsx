import React, { ReactElement } from 'react';
import { MuiVegaLite } from '../..';

export default { title: 'Vega Material UI Vega/Arc Charts/Pie Chart' };

export const Basic = (): ReactElement => (
  <MuiVegaLite
    variant="pieChart"
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
            { id: 'F', field: 8 }
          ],
          transform: [
            {
              type: 'pie',
              field: 'field'
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
              padAngle: { value: 0 }
            },
            update: {
              startAngle: { field: 'startAngle' },
              endAngle: { field: 'endAngle' },
              outerRadius: { signal: 'width / 2' }
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

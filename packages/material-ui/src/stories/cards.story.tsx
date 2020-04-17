import { Box, Card, CardHeader, CardContent } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { MuiVegaLite } from '..';

export default { title: 'Vega Material UI/Cards' };

export const BarChart = (): ReactElement => (
  <Box clone display="inline-block">
    <Card>
      <CardHeader title="Customer feedback" subheader="Positive comments" />
      <CardContent>
        <MuiVegaLite
          variant="verticalBarChart"
          actions={false}
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
      </CardContent>
    </Card>
  </Box>
);

export const LineChart = (): ReactElement => (
  <Box clone display="inline-block">
    <Card>
      <CardHeader title="GOOG" subheader="Google's stock price over time." />
      <CardContent>
        <MuiVegaLite
          variant="lineChart"
          actions={false}
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
      </CardContent>
    </Card>
  </Box>
);

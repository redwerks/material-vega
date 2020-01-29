/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import { SyntaxHighlighter } from '@storybook/components';
import { FunctionComponent } from 'react';
import { STORY_RENDER } from '@storybook/core-events';
import { EVENTS } from './constants';
import stringifyObject from 'stringify-object';

interface ChartProps {
  active: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  api: any; // API;
}

const Chart: FunctionComponent<ChartProps> = props => {
  const { api, active } = props;
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const onRender = (): void => {
      // Reset the chart on a new story in case it does not provide a chart
      setChart(null);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onChart = (id: string, spec: any): void => {
      console.log('chart', id, spec);
      setChart(spec);
    };
    // const onRendered = (name: string): void => {};
    api.on(STORY_RENDER, onRender);
    api.on(EVENTS.CHART, onChart);

    return (): void => {
      api.off(STORY_RENDER, onRender);
      api.off(EVENTS.CHART, onChart);
    };
  }, [api]);

  const chartText = useMemo(() => {
    return stringifyObject(chart, { indent: '  ' });
  }, [chart]);

  if (!active || !chart) return null;

  return (
    <SyntaxHighlighter language="js" format={false} padded>
      {chartText}
    </SyntaxHighlighter>
  );
};

export default Chart;

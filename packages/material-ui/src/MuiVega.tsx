import React, {
  useReducer,
  useCallback,
  useRef,
  memo,
  Reducer,
  ComponentType,
  forwardRef,
  Ref
} from 'react';
import { useMemo } from 'react';
import { mergeConfig, TooltipHandler, Item } from 'vega';
import { Vega } from 'react-vega';
import { VegaProps } from 'react-vega/lib/Vega';
import { useTheme, useForkRef } from '@material-ui/core';
import {
  createTheme,
  ThemeTypes,
  MaterialVegaOptions
} from '@material-vega/core';
import { MuiVegaTheme, defaultVegaTooltipOptions } from './MuiVegaTheme';
import { calculatePosition } from './tooltip/position';
import { MuiVegaTooltip, MuiVegaTooltipProps } from './tooltip/MuiVegaTooltip';
import { useMuiVegaOptions } from './useMuiVegaTheme';

const VegaMemo = memo(Vega);

export type MuiVegaProps = VegaProps & {
  variant: ThemeTypes;
  color?: 'primary' | 'secondary' | 'error' | 'warning';
  background?: 'transparent' | 'paper' | 'default';
  themeOptions?: Partial<MaterialVegaOptions>;
  TooltipComponent?: ComponentType<MuiVegaTooltipProps>;
};

interface TooltipState {
  position: { x: number; y: number };
  value: unknown;
}

interface TooltipReducerAction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: any;
  event: MouseEvent;
  item: Item;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

/**
 * <Vega> from react-vega but with a Material UI integrated theme
 */
export const MuiVega = forwardRef(
  (props: MuiVegaProps, parentRef: Ref<Vega>) => {
    const {
      variant,
      color = 'primary',
      background = 'transparent',
      tooltip: tooltipProp,
      TooltipComponent = MuiVegaTooltip,
      config: configProp,
      themeOptions,
      ...vegaProps
    } = props;
    const theme = useTheme<MuiVegaTheme>();
    const { offsetX, offsetY } = {
      ...defaultVegaTooltipOptions,
      ...theme.vegaTooltip
    };

    if (typeof configProp === 'string') {
      throw new TypeError(
        '@material-vega/material-ui does not support a string `config`.'
      );
    }

    const vegaRef = useRef();
    const ref = useForkRef(vegaRef, parentRef);

    const [tooltipState, dispatchTooltip] = useReducer<
      Reducer<TooltipState | null, TooltipReducerAction>
    >((state, { event, value }) => {
      if (value == null || value === '') return null;

      const { x, y } = calculatePosition(
        event,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (vegaRef.current as any).vegaEmbed.current.containerRef.current.getBoundingClientRect(),
        offsetX,
        offsetY
      );

      return { position: { x, y }, value };
    }, undefined);

    const tooltipHandler = useCallback<TooltipHandler>(
      (handler, event, item, value): void => {
        dispatchTooltip({ handler, event, item, value });
      },
      []
    );

    const tooltip = tooltipProp || tooltipHandler;

    const muiThemeOptions = useMuiVegaOptions({ color, background });
    const config = useMemo(
      () =>
        mergeConfig(
          createTheme({ ...muiThemeOptions, ...themeOptions }, variant),
          configProp || {}
        ),
      [theme, color, themeOptions]
    );

    return (
      <>
        <VegaMemo
          ref={ref}
          config={config}
          tooltip={tooltip}
          renderer="svg"
          {...vegaProps}
        />
        {tooltipState !== undefined && (
          <TooltipComponent value={null} {...tooltipState} />
        )}
      </>
    );
  }
);
MuiVega.displayName = 'MuiVega';

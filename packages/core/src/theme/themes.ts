import {
  createAreaConfig,
  createAreaLineConfig,
  createBarConfig,
  createCommonConfig,
  createDonutConfig,
  createFocusedBarConfig,
  createHorizontalBarConfig,
  createHorizontalCommonConfig,
  createLineConfig,
  createPieConfig,
  createVerticalBarConfig,
  createVerticalCommonConfig,
  createScatterplotConfig
} from '../configs';

/**
 * Internal mapping of theme names to the config object generators for that theme
 * @note Do not assign a type to this variable, ThemeTypes uses it to automatically generate a type list
 */
export const themes = {
  verticalBarChart: [
    createCommonConfig,
    createVerticalCommonConfig,
    createBarConfig,
    createVerticalBarConfig
  ],
  focusedVerticalBarChart: [
    createCommonConfig,
    createVerticalCommonConfig,
    createBarConfig,
    createVerticalBarConfig,
    createFocusedBarConfig
  ],
  horizontalBarChart: [
    createCommonConfig,
    createHorizontalCommonConfig,
    createBarConfig,
    createHorizontalBarConfig
  ],
  lineChart: [createCommonConfig, createVerticalCommonConfig, createLineConfig],
  areaChart: [createCommonConfig, createVerticalCommonConfig, createAreaConfig],
  areaLineChart: [
    createCommonConfig,
    createVerticalCommonConfig,
    createAreaLineConfig
  ],
  pieChart: [createCommonConfig, createPieConfig],
  donutChart: [createCommonConfig, createDonutConfig],
  scatterplotChart: [createCommonConfig, createScatterplotConfig]
};

/**
 * Valid theme names
 */
export type ThemeTypes = keyof typeof themes;

import {
  createCommonConfig,
  createBarConfig,
  createVerticalBarConfig,
  createHorizontalBarConfig,
  createLineConfig,
  createHorizontalCommonConfig,
  createVerticalCommonConfig
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
  horizontalBarChart: [
    createCommonConfig,
    createHorizontalCommonConfig,
    createBarConfig,
    createHorizontalBarConfig
  ],
  lineChart: [createCommonConfig, createVerticalCommonConfig, createLineConfig]
};

/**
 * Valid theme names
 */
export type ThemeTypes = keyof typeof themes;

import {
  createCommonConfig,
  createBarConfig,
  createVerticalBarConfig,
  createHorizontalBarConfig,
  createFocusedBarConfig,
  createLineConfig,
  createHorizontalCommonConfig,
  createVerticalCommonConfig
} from '../configs';
import { createAreaConfig } from '../configs/areaChart';

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
  areaChart: [createCommonConfig, createVerticalCommonConfig, createAreaConfig]
};

/**
 * Valid theme names
 */
export type ThemeTypes = keyof typeof themes;

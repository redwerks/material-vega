export interface MaterialVegaOptions {
  /**
   * Font family to use for text
   */
  font: string;
  /**
   * Spacing between labels and the chart
   */
  labelPadding: number;
  /**
   * Corner radius to use for bars
   */
  barCornerRadius: number;
  /**
   * Primary text color
   */
  textColor: string;
  /**
   * Secondary text color
   */
  secondaryTextColor: string;
  /**
   * Divider color
   */
  dividerColor: string;
  /**
   * Default color for single marks
   */
  color: string | undefined;
  /**
   * Background color for charts
   */
  background: string;
  /**
   * Bottom domain line thickness
   */
  thickDomainLineWidth: number;
}

export const materialVegaOptionDefaults: MaterialVegaOptions = {
  font: '"Roboto", "Helvetica", "Arial", sans-serif',
  labelPadding: 8,
  barCornerRadius: 2,
  textColor: 'rgba(0, 0, 0, 0.87)',
  secondaryTextColor: 'rgba(0, 0, 0, 0.54)',
  dividerColor: 'rgba(0, 0, 0, 0.12)',
  color: undefined,
  background: 'transparent',
  thickDomainLineWidth: 2
};

/**
 * Apply default values to user supplied material vega options
 */
export function extendDefaults(
  options: Partial<MaterialVegaOptions>
): MaterialVegaOptions {
  const opts: MaterialVegaOptions = Object.assign(
    materialVegaOptionDefaults,
    {}
  );
  for (const key in materialVegaOptionDefaults) {
    if (key in options && options[key] !== undefined) opts[key] = options[key];
  }
  return opts;
}

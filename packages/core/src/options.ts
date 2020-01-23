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
  cornerRadius: number;
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
   * Bottom domain line thickness
   */
  thickDomainLineWidth: number;
}

export const materialVegaOptionDefaults: MaterialVegaOptions = {
  font: '"Roboto", "Helvetica", "Arial", sans-serif',
  labelPadding: 8,
  cornerRadius: 2,
  textColor: 'rgba(0, 0, 0, 0.87)',
  secondaryTextColor: 'rgba(0, 0, 0, 0.54)',
  dividerColor: 'rgba(0, 0, 0, 0.12)',
  thickDomainLineWidth: 2
};

/**
 * Apply default values to user supplied material vega options
 */
export function extendDefaults(options: Partial<MaterialVegaOptions>) {
  return Object.assign({}, materialVegaOptionDefaults, options);
}

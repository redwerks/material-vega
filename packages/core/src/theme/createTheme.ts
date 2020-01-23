import { MaterialVegaOptions, extendDefaults } from '../options';
import { ThemeTypes, themes } from './themes';
import { Config } from 'vega-embed';
import { mergeConfig } from 'vega';

/**
 * Create a Material Vega chart theme
 * The result is a Vega/Vega Lite Config object to be passed to vegaEmbed or included in a spec
 */
export function createTheme(
  options: Partial<MaterialVegaOptions>,
  theme: ThemeTypes
): Config {
  const opts = extendDefaults(options);

  const configGenerators = themes[theme];
  const configs = configGenerators.map(createConfig => createConfig(opts));
  return mergeConfig(...configs);
}

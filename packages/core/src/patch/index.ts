import { PatchFunc } from 'vega-embed';
import { MaterialVegaOptions } from '../options';

/**
 * Patches a Vega spec with Material Design styles
 */
export const patch = (options: MaterialVegaOptions): PatchFunc => spec => {
  if (spec.marks) {
    for (const mark of spec.marks) {
      if (mark.type == 'rect' && mark.style && mark.style.includes('bar')) {
        // Bar chart?
        mark.encode = mark.encode || {};
        const enter = (mark.encode.enter = mark.encode.enter || {});

        const cornerRadius = options.cornerRadius;
        if (mark.encode.update.height && !mark.encode.update.enter) {
          // Horizontal
          // @todo Reverse horizontal?
          enter.cornerRadiusTopRight = [{ value: cornerRadius }];
          enter.cornerRadiusBottomRight = [{ value: cornerRadius }];
        } else {
          enter.cornerRadiusTopLeft = [{ value: cornerRadius }];
          enter.cornerRadiusTopRight = [{ value: cornerRadius }];
        }
      }
    }
  }

  return spec;
};

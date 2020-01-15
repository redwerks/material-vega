import { PatchFunc } from 'vega-embed';

/**
 * Patches a Vega spec with Material Design styles
 */
export const patch: PatchFunc = spec => {
  if (spec.marks) {
    for (const mark of spec.marks) {
      if (mark.type == 'rect' && mark.style && mark.style.includes('bar')) {
        // Bar chart?
        mark.encode = mark.encode || {};
        const enter = (mark.encode.enter = mark.encode.enter || {});

        const cornerRadius = 3;
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

/**
 * Coppied from https://github.com/vega/vega-tooltip/blob/master/src/formatValue.ts
 */

export function replacer(
  maxDepth: number
): (this: unknown, key: string, value: unknown) => unknown {
  const stack: unknown[] = [];

  return function(this: unknown, key: string, value: unknown): unknown {
    if (typeof value !== 'object' || value === null) {
      return value;
    }
    const pos = stack.indexOf(this) + 1;
    stack.length = pos;
    if (stack.length > maxDepth) {
      return '[Object]';
    }
    if (stack.indexOf(value) >= 0) {
      return '[Circular]';
    }
    stack.push(value);
    return value;
  };
}

/**
 * Stringify any JS object to valid JSON
 */
export function stringify(obj: unknown, maxDepth: number): string {
  return JSON.stringify(obj, replacer(maxDepth));
}

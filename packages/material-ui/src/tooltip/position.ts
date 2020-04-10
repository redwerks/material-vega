/**
 * Position the tooltip
 * Coppied from https://github.com/vega/vega-tooltip/blob/2b671cb4042416199018f476eb9333f4983a6339/src/position.ts
 *
 * @param event The mouse event.
 * @param tooltipBox
 * @param offsetX Horizontal offset.
 * @param offsetY Vertical offset.
 */
export function calculatePosition(
  event: MouseEvent,
  tooltipBox: { width: number; height: number },
  offsetX: number,
  offsetY: number
): { x: number; y: number } {
  let x = event.clientX + offsetX;
  if (x + tooltipBox.width > window.innerWidth) {
    x = +event.clientX - offsetX - tooltipBox.width;
  }

  let y = event.clientY + offsetY;
  if (y + tooltipBox.height > window.innerHeight) {
    y = +event.clientY - offsetY - tooltipBox.height;
  }

  return { x, y };
}

/**
 * Measure the scrollbar width and optionally make it available as CSS variable
 * on the HTML element.
 *
 * @param cssVariable - Whether to make the scrollbar width available
 * as CSS variable on the HTML element. Defaults to `true`.
 * @returns The scrollbar width.
 */
export function measureScrollbarWidth(cssVariable: boolean = true): number {
  const scrollbarWidth: number = window.innerWidth - document.body.clientWidth

  if (cssVariable) {
    document.documentElement.style.setProperty(
      '--scrollbarWidth',
      `${scrollbarWidth}px`,
    )
  }

  return scrollbarWidth
}

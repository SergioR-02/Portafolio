/**
 * Scrolls to a section by id using layout position (offsetTop traversal).
 *
 * getBoundingClientRect() is affected by CSS transforms — sections that use
 * translate-y in their enter animation report a position that is 40 px off
 * from their final resting place. Walking up the offsetParent chain gives the
 * true layout position, so the scroll target is correct regardless of whether
 * the section's animation has already played or not.
 */
export function scrollToSection(id: string, offset = 10): void {
  const el = document.getElementById(id);
  if (!el) return;

  let top = 0;
  let node: HTMLElement | null = el;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }

  window.scrollTo({ top: top - offset, behavior: 'smooth' });
}

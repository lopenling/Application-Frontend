
export const IconAddSquare = ({
  fill = "none",
  stroke = "currentColor",
  className = "",
  ariaHidden = "",
} = {}) => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.75 -0.75 24 24" ${
      (fill ? ` fill="${fill}"` : "") +
      (stroke ? ` stroke="${stroke}"` : "") +
      (className ? ` class="${className}"` : "") +
      (ariaHidden ? ` aria-hidden="${ariaHidden}"` : "")
    }><defs></defs><title>add-square</title><path d="m11.25 7.03125 0 8.4375" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="m7.03125 11.25 8.4375 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M3.515625 0.703125h15.46875s2.8125 0 2.8125 2.8125v15.46875s0 2.8125 -2.8125 2.8125H3.515625s-2.8125 0 -2.8125 -2.8125V3.515625s0 -2.8125 2.8125 -2.8125" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
  `;
};
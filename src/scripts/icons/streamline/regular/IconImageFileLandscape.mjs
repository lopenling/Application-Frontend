
export const IconImageFileLandscape = ({
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
    }><path d="M21.072187500000002 20.390625a1.40625 1.40625 0 0 1 -1.40625 1.40625H2.8340625a1.40625 1.40625 0 0 1 -1.40625 -1.40625V2.109375a1.40625 1.40625 0 0 1 1.40625 -1.40625h14.0625a1.40625 1.40625 0 0 1 0.9815624999999999 0.399375l2.7703125 2.7028125a1.40625 1.40625 0 0 1 0.42375 1.006875Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M5.6465625 7.03125a2.109375 2.109375 0 1 0 4.21875 0 2.109375 2.109375 0 1 0 -4.21875 0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="m17.6371875 17.0625 -3.6796875 -5.52a0.9478125 0.9478125 0 0 0 -1.5665625 -0.0178125l-2.5228124999999997 3.6046875000000003L8.304375 13.875a0.9478125 0.9478125 0 0 0 -1.381875 0.2146875L4.9434375 17.0625" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
  `;
};
export function createElement(
    tagName: string,
    attributes: Record<string, string | number | boolean> = {},
    children: (HTMLElement | string)[] = []
): HTMLElement {
  const element = document.createElement(tagName);

  Object.keys(attributes).forEach((attributeName) => {
    element.setAttribute(attributeName, String(attributes[attributeName]));
  });

  children.forEach((child) => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
}

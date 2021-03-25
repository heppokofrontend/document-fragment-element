type AcceptedTypes = string | Node | (string | Node | AcceptedTypes)[] | NodeList | HTMLCollection;

/**
 * Flatten iterable object
 * @param arg - Arguments received in the constructor
 * @returns - Completely Flattened array
 */
const flat = (arg: AcceptedTypes[]): (string | Node)[] => {
  /**
   * @param items - Arguments received in the constructor
   * @returns - Flattened array
   */
  const loop = (items: any[]): (string | Node)[] => {
    return items.reduce((previous: AcceptedTypes[], current: []) => previous.concat(
      typeof current !== 'string' && current[Symbol.iterator] ?
      loop([...current]) : current
    ), []);
  };

  return loop(arg);
};

export default class HTMLDocumentFragmentElement extends HTMLElement {
  /**
   * Move the childNodes of that document-fragment element to
   * the DocumentFragment and expose that fragment instead of this element to the DOM.
   */
  private putOut() {
    const fragment = document.createDocumentFragment();
    const childNodes = [...this.childNodes];

    for (const node of childNodes) {
      fragment.append(node);
    }

    this.replaceWith(fragment);
  }

  /**
   * @param content - Content that you want to add to your own child elements
   */
  private add(content: string | Node) {
    if (
      content &&
      typeof content === 'object'
    ) {
      try {
        this.appendChild(content);
      } catch (e) {
        throw new TypeError(`The ${String(content)} cannot be included in a HTMLDocumentFragmentElement. Only Node or Element is allowed.`);
      }

      return;
    }

    this.insertAdjacentHTML('beforeend', content);
  }

  connectedCallback() {
    if (document.readyState === 'loading') {  // Loading hasn't finished yet
      document.addEventListener('DOMContentLoaded', () => this.putOut());

      return;
    }

    this.putOut();
  }

  constructor(...contents: AcceptedTypes[]) {
    super();

    const items = flat(contents);

    for (const content of items) {
      this.add(content);
    }
  }
}

// コンストラクタ名が難読化で変わってしまうため
Object.defineProperty(HTMLDocumentFragmentElement, 'name', {
  value: 'HTMLDocumentFragmentElement',
});

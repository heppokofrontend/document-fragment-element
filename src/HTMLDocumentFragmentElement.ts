type AcceptedTypes = string | string[] | Node | Node[] | NodeList;

export default class HTMLDocumentFragmentElement extends HTMLElement {
  /**
   * Flatten iterable object
   * @param arg - Arguments received in the constructor
   * @returns - Completely Flattened array
   */
  private static flat(arg: AcceptedTypes[]): (string | Node)[] {
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

  connectedCallback() {
    const fragment = document.createDocumentFragment();
    const childNodes = [...this.childNodes];

    for (const node of childNodes) {
      fragment.append(node);
    }

    this.replaceWith(fragment);
  }

  constructor(...arg: AcceptedTypes[]) {
    super();

    const contents = HTMLDocumentFragmentElement.flat([...arg]);

    for (const content of contents) {
      if (typeof content === 'object') {
        try {
          this.appendChild(content);
        } catch (e) {
          throw new TypeError(`The ${String(content)} cannot be included in a HTMLDocumentFragmentElement. Only Node or Element is allowed.`);
        }
      } else {
        this.insertAdjacentHTML('beforeend', content);
      }
    }
  }
}

// コンストラクタ名が難読化で変わってしまうため
Object.defineProperty(HTMLDocumentFragmentElement, 'name', {
  value: 'HTMLDocumentFragmentElement',
});

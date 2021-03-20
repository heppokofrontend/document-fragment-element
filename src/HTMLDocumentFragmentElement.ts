export default class HTMLDocumentFragmentElement extends HTMLElement {
  connectedCallback() {
    const fragment = document.createDocumentFragment();
    const childNodes = [...this.childNodes];

    for (const node of childNodes) {
      fragment.append(node);
    }

    this.replaceWith(fragment);
  }

  constructor(...contents: (Node | string)[]) {
    super();

    for (const content of contents) {
      if (typeof content === 'string') {
        this.insertAdjacentHTML('beforeend', content);
      } else {
        try {
          this.appendChild(content);
        } catch (e) {
          throw new TypeError(`The ${String(content)} cannot be included in a HTMLDocumentFragmentElement.`);
        }
      }
    }
  }
}

// コンストラクタ名が難読化で変わってしまうため
Object.defineProperty(HTMLDocumentFragmentElement, 'name', {
  value: 'HTMLDocumentFragmentElement',
});

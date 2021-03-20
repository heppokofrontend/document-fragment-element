export default class HTMLDocumentFragmentElement extends HTMLElement {
  connectedCallback() {
    const fragment = document.createDocumentFragment();
    const childNodes = [...this.childNodes];

    for (const node of childNodes) {
      fragment.append(node);
    }

    this.replaceWith(fragment);
  }
}

// コンストラクタ名が難読化で変わってしまうため
Object.defineProperty(HTMLDocumentFragmentElement, 'name', {
  value: 'HTMLDocumentFragmentElement',
});

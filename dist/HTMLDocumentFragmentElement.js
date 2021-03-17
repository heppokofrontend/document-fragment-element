"use strict";
class HTMLDocumentFragmentElement extends HTMLElement {
    connectedCallback() {
        const fragment = document.createDocumentFragment();
        const childNodes = [...this.childNodes];
        for (const node of childNodes) {
            fragment.append(node);
        }
        this.replaceWith(fragment);
    }
}
customElements.define('document-fragment', HTMLDocumentFragmentElement);

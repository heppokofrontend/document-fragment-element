"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Flatten iterable object
 * @param arg - Arguments received in the constructor
 * @returns - Completely Flattened array
 */
const flat = (arg) => {
    /**
     * @param items - Arguments received in the constructor
     * @returns - Flattened array
     */
    const loop = (items) => {
        return items.reduce((previous, current) => previous.concat(typeof current !== 'string' && current[Symbol.iterator] ?
            loop([...current]) : current), []);
    };
    return loop(arg);
};
class HTMLDocumentFragmentElement extends HTMLElement {
    /**
     * Move the childNodes of that document-fragment element to
     * the DocumentFragment and expose that fragment instead of this element to the DOM.
     */
    putOut() {
        const fragment = document.createDocumentFragment();
        const childNodes = [...this.childNodes];
        for (const node of childNodes) {
            fragment.append(node);
        }
        this.replaceWith(fragment);
    }
    connectedCallback() {
        if (document.readyState === 'loading') { // Loading hasn't finished yet
            document.addEventListener('DOMContentLoaded', () => this.putOut());
            return;
        }
        this.putOut();
    }
    constructor(...contents) {
        super();
        const items = flat(contents);
        for (const content of items) {
            if (typeof content === 'object') {
                try {
                    this.appendChild(content);
                }
                catch (e) {
                    throw new TypeError(`The ${String(content)} cannot be included in a HTMLDocumentFragmentElement. Only Node or Element is allowed.`);
                }
            }
            else {
                this.insertAdjacentHTML('beforeend', content);
            }
        }
    }
}
exports.default = HTMLDocumentFragmentElement;
// コンストラクタ名が難読化で変わってしまうため
Object.defineProperty(HTMLDocumentFragmentElement, 'name', {
    value: 'HTMLDocumentFragmentElement',
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HTMLDocumentFragmentElement extends HTMLElement {
    /**
     * Flatten iterable object
     * @param arg - Arguments received in the constructor
     * @returns - Completely Flattened array
     */
    static flat(arg) {
        /**
         * @param items - Arguments received in the constructor
         * @returns - Flattened array
         */
        const loop = (items) => {
            return items.reduce((previous, current) => previous.concat(typeof current !== 'string' && current[Symbol.iterator] ?
                loop([...current]) : current), []);
        };
        return loop(arg);
    }
    ;
    connectedCallback() {
        const fragment = document.createDocumentFragment();
        const childNodes = [...this.childNodes];
        for (const node of childNodes) {
            fragment.append(node);
        }
        this.replaceWith(fragment);
    }
    constructor(...contents) {
        super();
        const items = HTMLDocumentFragmentElement.flat([...contents]);
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

declare type AcceptedTypes = string | Node | (string | Node | AcceptedTypes)[] | NodeList | HTMLCollection;
export default class HTMLDocumentFragmentElement extends HTMLElement {
    /**
     * Flatten iterable object
     * @param arg - Arguments received in the constructor
     * @returns - Completely Flattened array
     */
    private static flat;
    /**
     * Move the childNodes of that document-fragment element to
     * the DocumentFragment and expose that fragment instead of this element to the DOM.
     */
    private putOut;
    connectedCallback(): void;
    constructor(...contents: AcceptedTypes[]);
}
export {};

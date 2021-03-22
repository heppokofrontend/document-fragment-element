declare type AcceptedTypes = string | Node | (string | Node | AcceptedTypes)[] | NodeList | HTMLCollection;
export default class HTMLDocumentFragmentElement extends HTMLElement {
    /**
     * Move the childNodes of that document-fragment element to
     * the DocumentFragment and expose that fragment instead of this element to the DOM.
     */
    private putOut;
    /**
     * @param content - Content that you want to add to your own child elements
     */
    private add;
    connectedCallback(): void;
    constructor(...contents: AcceptedTypes[]);
}
export {};

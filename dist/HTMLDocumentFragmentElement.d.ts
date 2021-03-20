declare type AcceptedTypes = string | Node | (string | Node | AcceptedTypes)[] | NodeList | HTMLCollection;
export default class HTMLDocumentFragmentElement extends HTMLElement {
    /**
     * Flatten iterable object
     * @param arg - Arguments received in the constructor
     * @returns - Completely Flattened array
     */
    private static flat;
    connectedCallback(): void;
    constructor(...contents: AcceptedTypes[]);
}
export {};

# &lt;document-fragment&gt;

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Published on NPM](https://img.shields.io/npm/v/html-document-fragment-element.svg)](https://www.npmjs.com/package/html-document-fragment-element) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/html-document-fragment-element) [![](https://data.jsdelivr.com/v1/package/npm/html-document-fragment-element/badge)](https://www.jsdelivr.com/package/npm/html-document-fragment-element) [![Maintainability](https://api.codeclimate.com/v1/badges/de7f3242b44531ac8fa7/maintainability)](https://codeclimate.com/github/heppokofrontend/html-document-fragment-element/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/de7f3242b44531ac8fa7/test_coverage)](https://codeclimate.com/github/heppokofrontend/html-document-fragment-element/test_coverage) [![Known Vulnerabilities](https://snyk.io/package/npm/html-document-fragment-element/badge.svg)](https://snyk.io/package/npm/html-document-fragment-element)
 [![html-document-fragment-element](https://snyk.io/advisor/npm-package/html-document-fragment-element/badge.svg)](https://snyk.io/advisor/npm-package/html-document-fragment-element)


The document fragment custom element is a simple custom element that does like a DocumentFragment.

## Usage

### In browser

```html
<!DOCTYPE html>
<html>
<head>
  <title>html-document-fragment-element in the browser</title>
  <script src="https://cdn.jsdelivr.net/npm/html-document-fragment-element@0.2.5/lib/index.min.js"></script>
</head>
<body>
  <script>
    // code...
  </script>
</body>
</html>
```

#### Support browser

- Chrome
- Safari
- Firefox
- Edge

### In development

Installation:

```shell
npm install --save html-document-fragment-element
```
#### Use replaceWith with some elements

html:

```html
<element class="target"></element>
```

js:

```javascript
import 'html-document-fragment-element';

const target = document.querySelector('.target');
const dfElm = document.createElement('document-fragment');

dfElm.insertAdjacentHTML('afterbegin', `
  <document-fragment>
    <p>element 1</p>
    <p>element 2</p>
  </document-fragment>
`);

target.replaceWith(dfElm);
```

Result HTML:

```html
    <p>element 1</p>
    <p>element 2</p>
```

#### Parse the string as DOM then append to the page.

This is example of way to add two p elements as children of the body element.

Usually:

```javascript
const markup = `
  <p>element 1</p>
  <p>element 2</p>
`

const parser = new DOMParser();
const {body} = parser.parseFromString(markup, 'text/html');

for (const p of [...body.childNodes]) {
  document.body.append(p);
}
```

With HTMLDocumentFragmentElement:

```javascript
import 'html-document-fragment-element';

const markup = `
  <p>element 1</p>
  <p>element 2</p>
`

const dfElm = document.createElement('document-fragment');

dfElm.insertAdjacentHTML('afterbegin', markup);
document.body.append(dfElm);
```

#### Use as constructor 

```js
import { HTMLDocumentFragmentElement } from 'html-document-fragment-element';

const dfElm = new HTMLDocumentFragmentElement();
```

##### Syntax

```javascript
new HTMLDocumentFragmentElement(content, [...content]);

new HTMLDocumentFragmentElement(contents);
```

##### Parameters

Arguments are implicitly converted to strings if they are not objects.

###### `content`

The element is initialized with the given `string` or `Node` as `childNode`.

###### `contents`

The element is initialized with the given something as `childNode`.

The types are allowed `string`, `Node`, `NodeList`, `HTMLCollection` and arrays containing them.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

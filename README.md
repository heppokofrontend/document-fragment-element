# &lt;document-fragment&gt;

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Published on NPM](https://img.shields.io/npm/v/@polymer/iron-icons.svg)](https://www.npmjs.com/package/html-document-fragment-element) <!-- [![Build Status](https://travis-ci.com/heppokofrontend/html-document-fragment-element.svg?branch=master)](https://travis-ci.com/heppokofrontend/html-document-fragment-element) --> [![Maintainability](https://api.codeclimate.com/v1/badges/307603c1cde8a74cc866/maintainability)](https://codeclimate.com/github/heppokofrontend/html-document-fragment-element/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/307603c1cde8a74cc866/test_coverage)](https://codeclimate.com/github/heppokofrontend/html-document-fragment-element/test_coverage)

The document fragment custom element is a simple custom element that does like a DocumentFragment.

## Usage

### Installation

```shell
npm install --save html-document-fragment-element
```
### Use replaceWith with some elements

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

Result:

```html
    <p>element 1</p>
    <p>element 2</p>
```

### Parse the string as DOM then append to the page.

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
document.body.append(p);
```

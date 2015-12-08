# rebeccapurple

Simple JavaScript module for transforming the [W3C CSS `rebeccapurple` color](http://dev.w3.org/csswg/css-color/#valdef-color-rebeccapurple) to rgb.

[![Build Status](https://travis-ci.org/joshgillies/rebeccapurple.svg)](https://travis-ci.org/joshgillies/rebeccapurple)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Usage

```js
var rebeccapurple = require('rebeccapurple')
```

`rebeccapurple` provides a simple interface for converting the CSS named color
`rebeccapurple` to any rgb value:

```js
console.log(rebeccapurple('color: rebeccapurple')) // 'color: rgb(102, 51, 153'
```

In addition you can pass an optional argument specifying the output value:

```js
console.log(rebeccapurple('color: rebeccapurple', 'hex')) // 'color: #663399'
```

Any output value supported by the [color](https://github.com/MoOx/color#css-strings)
module can be used here. Eg. `'hex'`, `'rgb'`, `'hsl'`, etc.

## License

MIT

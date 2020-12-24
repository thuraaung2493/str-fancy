# String Helper Functions

## Description

- Laravel ရဲ့ Helper Functions တွေထဲက Fluent Strings နဲ့ Strings တွေကို NodeJS မှာ သုံးလို့ရမှာပါ။

## Dependencies

- [any-ascii](https://www.npmjs.com/package/any-ascii)
- [pluralize](https://www.npmjs.com/package/pluralize)

## Installation

```
  npm install str-fancy
```

## Methods

- Methods တွေကတော့ Laravel က အတိုင်းပဲဆိုတော့ Laravel Documentation မှာပဲ ကြည့်လိုက်ပါ။

#### Note

- အချို့ မရသေးတဲ့ methods တွေတော့ရှိသေးပါတယ်။

## Usage

```javascript
const { StrFancy, strings } = require("str-fancy");

let str = StrFancy.of("foo_bar_baz").camel();
console.log(str); // fooBarBaz

str = strings.camel("foo_bar_baz");
console.log(str); // fooBarBaz
```

[0]: https://github.com/thuraaung2493
[1]: https://github.com/thuraaung2493/str-fancy/issues

#### Author: [thuraaung2493][0]

#### Issues: [Open issues][1]

#### License: MIT

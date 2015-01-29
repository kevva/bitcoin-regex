# bitcoin-regex [![Build Status](http://img.shields.io/travis/kevva/bitcoin-regex.svg?style=flat)](https://travis-ci.org/kevva/bitcoin-regex)

> Regular expression for matching Bitcoin addresses

## Install

```sh
$ npm install --save bitcoin-regex
```

## Usage

```js
var bitcoinRegex = require('bitcoin-regex');

bitcoinRegex().test('1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp foo bar');
//=> true

bitcoinRegex({ exact: true }).test('1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp foo bar');
//=> false

bitcoinRegex({ exact: true }).test('1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp');
//=> true

'foo 1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp bar 1JeTiYgfVtpA3ygQTYFswkaoiH2VnFZJf9'.match(bitcoinRegex());
//=> ['1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp', '1JeTiYgfVtpA3ygQTYFswkaoiH2VnFZJf9']
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)

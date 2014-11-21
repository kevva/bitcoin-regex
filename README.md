# bitcoin-regex [![Build Status](https://travis-ci.org/kevva/bitcoin-regex.svg?branch=master)](https://travis-ci.org/kevva/bitcoin-regex)

> Regular expression for matching Bitcoin addresses

## Install

```sh
$ npm install --save bitcoin-regex
```

## Usage

```js
var bitcoinRegex = require('bitcoin-regex');

bitcoinRegex().test('1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp');
//=> true

bitcoinRegex().exec('Bitcoin address: 1JeTiYgfVtpA3ygQTYFswkaoiH2VnFZJf9')[0].trim();
//=> 1JeTiYgfVtpA3ygQTYFswkaoiH2VnFZJf9

'Multiple 1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp 1JeTiYgfVtpA3ygQTYFswkaoiH2VnFZJf9 addresses'.match(bitcoinRegex());
//=> ['1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp', '1JeTiYgfVtpA3ygQTYFswkaoiH2VnFZJf9']
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)

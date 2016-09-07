# bitcoin-regex [![Build Status](https://travis-ci.org/kevva/bitcoin-regex.svg?branch=master)](https://travis-ci.org/kevva/bitcoin-regex)

> Regular expression for matching Bitcoin addresses


## Install

```
$ npm install --save bitcoin-regex
```


## Usage

```js
const bitcoinRegex = require('bitcoin-regex');

bitcoinRegex().test('1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp foo bar');
//=> true

bitcoinRegex({exact: true}).test('1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp foo bar');
//=> false

bitcoinRegex({exact: true}).test('1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp');
//=> true

'foo 1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp bar 1JeTiYgfVtpA3ygQTYFswkaoiH2VnFZJf9'.match(bitcoinRegex());
//=> ['1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp', '1JeTiYgfVtpA3ygQTYFswkaoiH2VnFZJf9']
```


## API

### bitcoinRegex([options])

Returns a regex for matching Bitcoin addresses.

#### options

##### exact

Type: `boolean`<br>
Default: `false` *(Matches any Bitcoin address in a string)*

Only match an exact string. Useful with `RegExp#test` to check if a string is a Bitcoin address.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)

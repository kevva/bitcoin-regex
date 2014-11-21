'use strict';

var bitcoinRegex = require('./');
var test = require('ava');

test('match bitcoin addresses', function (t) {
	var fixtures = [
		'1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp',
		'1JeTiYgfVtpA3ygQTYFswkaoiH2VnFZJf9',
		'1Ak6rNZYm5tNtDVJRt93Cax17TBih6pM7Y',
		'1dice6YgEVBf88erBFra9BHf6ZMoyvG88',
		'1FFirnLctcZxVx5otnLNZ4dDGUkMBM4vNr'
	];

	fixtures.forEach(function (el) {
		if (!bitcoinRegex().exec(el)) {
			t.assert(false, el);
			return;
		}

		t.assert(bitcoinRegex().exec(el)[0] === el, el);
	});

	t.end();
});

test('do not match bitcoin addresses', function (t) {
	var fixtures = [
		'2dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp',
		'1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDpVasASdga',
		'1dice8EMZmqKvrGE4Qc9bUFf9'
	];

	fixtures.forEach(function (el) {
		if (!bitcoinRegex().exec(el)) {
			t.assert(true);
			return;
		}

		t.assert(bitcoinRegex().exec(el)[0] !== el, el);
	});

	t.end();
});

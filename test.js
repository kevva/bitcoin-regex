import test from 'ava';
import bitcoinRegex from './';

test('match bitcoin addresses', t => {
	const fixtures = [
		'1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp',
		'1JeTiYgfVtpA3ygQTYFswkaoiH2VnFZJf9',
		'1Ak6rNZYm5tNtDVJRt93Cax17TBih6pM7Y',
		'1dice6YgEVBf88erBFra9BHf6ZMoyvG88',
		'1FFirnLctcZxVx5otnLNZ4dDGUkMBM4vNr'
	];

	for (const x of fixtures) {
		t.true(bitcoinRegex({exact: true}).test(x));
	}
});

test('don\'t match bitcoin addresses', t => {
	var fixtures = [
		'2dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp',
		'1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDpVasASdga',
		'1dice8EMZmqKvrGE4Qc9bUFf9',
		'1FFirnLctcZxVx5otOnLNZ4dDGkMBM4vN',
		'1FFirnLctcZxVx5ot0nLNZ4dDGkMBM4vN',
		'1FFirnLctcZxVx5otInLNZ4dDGkMBM4vN',
		'1FFirnLctcZxVx5otlnLNZ4dDGkMBM4vN'
	];

	for (const x of fixtures) {
		t.false(bitcoinRegex({exact: true}).test(x));
	}
});

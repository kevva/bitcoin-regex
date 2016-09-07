'use strict';

module.exports = opts => {
	opts = Object.assign({}, opts);
	const regex = '(?:[13][a-km-zA-HJ-NP-Z1-9]{25,34})';
	return opts.exact ? new RegExp('(?:^' + regex + '$)') : new RegExp(regex, 'g');
};

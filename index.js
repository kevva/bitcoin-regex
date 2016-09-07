'use strict';

module.exports = function (opts) {
	opts = opts || {};
	var regex = '(?:[13][a-km-zA-HJ-NP-Z1-9]{25,34})';

	return opts.exact ? new RegExp('(?:^' + regex + '$)') :
						new RegExp(regex, 'g');
};

'use strict';

module.exports = function (opts) {
	opts = opts || {};
	var regex = '(?:[13][1-9A-Za-z][^O0Il]{24,32})';

	return opts.exact ? new RegExp('(?:^' + regex + '$)') :
						new RegExp(regex, 'g');
};

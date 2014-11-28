'use strict';

/**
 * Regular expression for matching Bitcoin addresses
 *
 * @param {Object} opts
 * @api public
 */

module.exports = function (opts) {
	opts = opts || {};
	var regex = '(?:[13][1-9A-Za-z][^O0Il]{24,32})';

	return opts.exact ? new RegExp('(?:^' + regex + '$)') :
						new RegExp('(?:^|\\s)?' + regex, 'g');
};

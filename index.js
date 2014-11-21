'use strict';

/**
 * Regular expression for matching Bitcoin addresses
 *
 * @api public
 */

module.exports = function () {
	return /(?:^|\s)(?:[13][1-9A-Za-z][^O0Il]{24,33})/g;
};

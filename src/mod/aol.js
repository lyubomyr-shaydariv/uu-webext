import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('search.aol.com').PATHNAME_PREFIX('/aol/search;')
		.FROM().QUERY_ENTRIES()
		.DO().RETAIN('q'),
	RULE()
		.AT().HOSTNAME('search.aol.com').PATHNAME_PREFIX('/aol/search;')
		.FROM().PATHNAME()
		.DO().ASSIGN('/aol/search')
];

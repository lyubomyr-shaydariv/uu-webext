import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('disq.us')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('cuid'),
	RULE()
		.AT().DOMAIN('disq.us')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];

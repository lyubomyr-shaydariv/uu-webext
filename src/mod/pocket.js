import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('getpocket.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('src'),
	RULE()
		.AT().DOMAIN('getpocket.com').QUERY_ENTRIES_HAVING_ALL_OF('url')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];

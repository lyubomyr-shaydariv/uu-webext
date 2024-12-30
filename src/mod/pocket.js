import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('getpocket.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('src'),
	RULE()
		.AT().DOMAIN('getpocket.com').QUERY_ENTRY_KEYS('url')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];

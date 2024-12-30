import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('medium.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('source'),
	RULE()
		.AT().DOMAIN('medium.com').PATHNAME('/r/')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];

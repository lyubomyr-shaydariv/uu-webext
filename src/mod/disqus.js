import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('disq.us')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('cuid'),
	RULE()
		.AT().DOMAIN('disq.us')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];

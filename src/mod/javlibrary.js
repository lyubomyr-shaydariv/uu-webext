import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('javlibrary.com').PATHNAME(/\/[a-z]+\/redirect\.php/)
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];

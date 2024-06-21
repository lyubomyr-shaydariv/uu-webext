import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('ttclid'),
	RULE()
		.AT().DOMAIN('tiktok.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE_ALL(),
	RULE()
		.AT().DOMAIN('tiktok.com').PATHNAME('/link/v2')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('target').TO_URL()
		.DO().REDIRECT()
];

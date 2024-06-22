import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('ttclid'),
	RULE()
		.AT().DOMAIN('tiktok.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE_ALL(),
	RULE()
		.AT().DOMAIN('tiktok.com').PATHNAME('/link/v2')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('target').TO_URL()
		.DO().REDIRECT()
];

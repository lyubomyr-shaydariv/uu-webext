import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('redirectingat.com')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];

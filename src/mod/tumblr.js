import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('t.umblr.com').PATHNAME('/redirect')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('z').TO_URL()
		.DO().REDIRECT()
];

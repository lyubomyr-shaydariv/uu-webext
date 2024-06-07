import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('tatrck.com').PATHNAME('/v1/go/')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('deeplink').TO_URL()
		.DO().REDIRECT()
];

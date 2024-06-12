import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('workable.com').PATHNAME('/nr')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('l').TO_URL()
		.DO().REDIRECT()
];

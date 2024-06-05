import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().DOMAIN('mailtrack.io')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];

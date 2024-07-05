import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('t.lever-analytics.com').PATHNAME('/email-link')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('dest').TO_URL()
		.DO().REDIRECT()
];

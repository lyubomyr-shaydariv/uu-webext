import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('duckduckgo.com').PATHNAME('/l/')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('uddg').TO_URL()
		.DO().REDIRECT()
];

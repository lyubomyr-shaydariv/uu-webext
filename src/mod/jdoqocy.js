import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('jdoqocy.com').PATHNAME('/click')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];

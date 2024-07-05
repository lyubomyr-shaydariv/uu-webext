import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bing.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('cvid', 'form', 'pq', 'qs', 'qp', 'sc', 'sk', 'sp'),
	RULE()
		.AT().DOMAIN('edgeservices.bing.com').PATHNAME('/edgesvc/redirect')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];

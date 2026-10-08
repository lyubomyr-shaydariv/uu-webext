import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bing.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('FORM', 'cdnurl', 'ccid', 'ck', 'cvid', 'form', 'ghacc', 'ghsh', 'pivotparams', 'pq', 'qs', 'qp', 'ru', 'sc', 'simid', 'sk', 'sp', 'thid'),
	RULE()
		.AT().DOMAIN('edgeservices.bing.com').PATHNAME('/edgesvc/redirect')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];

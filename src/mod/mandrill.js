import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('mandrillapp.com').PATHNAME('/track/click/')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('p').FROM_BASE64().FROM_JSON().GET_PROPERTY('p').FROM_JSON().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];

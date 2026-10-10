import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('upwork.com').PATHNAME('/leaving-odesk')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('ref').TO_URL()
		.DO().REDIRECT()
];

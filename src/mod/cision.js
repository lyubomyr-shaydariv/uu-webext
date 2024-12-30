import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('c212.net').PATHNAME('/c/link/')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('u').TO_URL()
		.DO().REDIRECT()
];

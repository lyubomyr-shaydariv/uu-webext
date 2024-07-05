import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('c212.net').PATHNAME('/c/link/')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('u').TO_URL()
		.DO().REDIRECT()
];

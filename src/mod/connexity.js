import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('connexity.net').PATHNAME('/rd')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('t').TO_URL()
		.DO().REDIRECT()
];

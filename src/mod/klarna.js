import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('r.klar.na').PATHNAME('/')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('to').TO_URL()
		.DO().REDIRECT()
];

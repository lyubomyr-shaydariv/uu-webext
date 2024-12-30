import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('exit.sc', 'gate.sc').PATHNAME('/')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];

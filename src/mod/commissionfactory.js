import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('t.cfjump.com')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('Url').TO_URL()
		.DO().REDIRECT()
];

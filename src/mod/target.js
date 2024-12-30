import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('goto.target.com')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('u').TO_URL()
		.DO().REDIRECT()
];

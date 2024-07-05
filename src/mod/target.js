import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('goto.target.com')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('u').TO_URL()
		.DO().REDIRECT()
];

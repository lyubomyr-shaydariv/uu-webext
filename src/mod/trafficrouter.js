import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('go.trafficrouter.io')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('original').TO_URL()
		.DO().REDIRECT()
];

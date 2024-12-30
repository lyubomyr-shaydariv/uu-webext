import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('www.ojrq.net').PATHNAME('/p/')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('return').TO_URL()
		.DO().REDIRECT()
];

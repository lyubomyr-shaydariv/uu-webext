import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('www.ojrq.net').PATHNAME('/p/')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('return').TO_URL()
		.DO().REDIRECT()
];

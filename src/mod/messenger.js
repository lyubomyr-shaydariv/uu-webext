import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('messenger.com').PATHNAME('/l.php')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('u').TO_URL()
		.DO().REDIRECT()
];

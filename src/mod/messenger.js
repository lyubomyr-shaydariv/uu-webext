import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('messenger.com').PATHNAME('/l.php')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('u').TO_URL()
		.DO().REDIRECT()
];

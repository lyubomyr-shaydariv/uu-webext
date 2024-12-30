import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('vk.com').PATHNAME('/away.php')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('to').TO_URL()
		.DO().REDIRECT()
];

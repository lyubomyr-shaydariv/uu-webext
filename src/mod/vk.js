import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().DOMAIN('vk.com').PATHNAME('/away.php')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('to').TO_URL()
		.DO().REDIRECT()
];

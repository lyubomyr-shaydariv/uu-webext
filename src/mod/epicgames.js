import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('redirect.epicgames.com')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('redirectTo').TO_URL()
		.DO().REDIRECT()
];

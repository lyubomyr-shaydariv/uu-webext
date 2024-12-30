import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('epicgames.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('epic_affiliate', 'epic_gameId'),
	RULE()
		.AT().DOMAIN('redirect.epicgames.com')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('redirectTo').TO_URL()
		.DO().REDIRECT()
];

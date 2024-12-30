import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('spotify.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('context', 'si')
];

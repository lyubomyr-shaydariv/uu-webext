import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('imgur.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('source')
];

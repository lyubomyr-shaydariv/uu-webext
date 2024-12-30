import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bandcamp.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('from')
];

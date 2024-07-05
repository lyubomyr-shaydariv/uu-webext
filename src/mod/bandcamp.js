import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bandcamp.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('from')
];

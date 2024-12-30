import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('hackernoon.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('ref')
];

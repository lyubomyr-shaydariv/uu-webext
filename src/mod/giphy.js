import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('giphy.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('ref')
];

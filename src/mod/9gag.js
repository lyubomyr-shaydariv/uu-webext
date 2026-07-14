import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('9gag.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('ref')
];

import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('giphy.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('ref')
];

import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('hackernoon.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('ref')
];

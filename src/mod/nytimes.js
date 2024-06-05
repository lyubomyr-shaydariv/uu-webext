import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().DOMAIN('nytimes.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('smid')
];

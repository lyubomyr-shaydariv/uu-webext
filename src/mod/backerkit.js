import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('backerkit.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('ref')
];

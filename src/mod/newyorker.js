import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('newyorker.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('bxid', 'cndid', 'esrc', 'source')
];

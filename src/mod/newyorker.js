import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('newyorker.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('bxid', 'cndid', 'esrc', 'source')
];

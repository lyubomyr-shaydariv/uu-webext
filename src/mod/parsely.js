import { RULE } from '/rules.js';

// this might be too broad
RULE()
	.AT().ANYWHERE()
	.FROM().QUERY_ENTRIES()
	.DO().REMOVE('Campaign');

export default [
];

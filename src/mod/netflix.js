import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('netflix.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('tctx', 'trackId')
];

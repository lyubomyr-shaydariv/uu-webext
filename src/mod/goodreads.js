import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('goodreads.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('ac', 'from_search', 'from_srp', 'qid', 'rank', 'ref')
];

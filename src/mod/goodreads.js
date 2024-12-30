import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('goodreads.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('ac', 'from_search', 'from_srp', 'qid', 'rank', 'ref')
];

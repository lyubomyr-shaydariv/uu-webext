import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().DOMAIN('imdb.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE(/^pf_rd_.*/, 'ref_')
];

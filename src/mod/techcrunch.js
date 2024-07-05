import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('techcrunch.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('sr', 'sr_share', 'tpcc')
];

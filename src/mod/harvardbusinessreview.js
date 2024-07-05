import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('hbr.org')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('tpcc')
];

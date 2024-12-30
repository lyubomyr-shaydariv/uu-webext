import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('hbr.org')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('tpcc')
];

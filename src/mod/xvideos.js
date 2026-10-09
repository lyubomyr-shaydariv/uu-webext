import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('xvideos.com', 'xvideos.red')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('pmln', 'pmsc', 'sxcaf')
];

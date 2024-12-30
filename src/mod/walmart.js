import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('walmart.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE(/ath[a-z]*/, 'u1')
];

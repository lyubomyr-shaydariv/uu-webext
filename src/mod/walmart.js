import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('walmart.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE(/ath[a-z]*/, 'u1')
];

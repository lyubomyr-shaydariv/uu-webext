import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('zillow.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('rtoken')
];

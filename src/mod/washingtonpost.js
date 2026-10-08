import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('washingtonpost.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('itid', 'pwapi_token', 's_l')
];

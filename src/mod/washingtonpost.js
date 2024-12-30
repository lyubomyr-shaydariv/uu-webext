import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('washingtonpost.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('pwapi_token')
];

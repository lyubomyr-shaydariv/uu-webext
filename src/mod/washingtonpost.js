import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('washingtonpost.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('pwapi_token')
];

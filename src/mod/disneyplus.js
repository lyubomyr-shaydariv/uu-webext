import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('disneyplus.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('sharesource')
];

import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('zoopla.co.uk')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('search_identifier')
];

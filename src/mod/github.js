import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('github.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('email_source', 'email_token')
];

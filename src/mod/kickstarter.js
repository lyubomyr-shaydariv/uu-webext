import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('kickstarter.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('ref')
];

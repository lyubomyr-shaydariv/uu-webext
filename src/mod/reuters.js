import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('reuters.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('taid')
];

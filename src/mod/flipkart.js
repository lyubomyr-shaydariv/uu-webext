import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('flipkart.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE_ALL()
];

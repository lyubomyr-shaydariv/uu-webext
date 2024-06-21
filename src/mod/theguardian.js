import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('theguardian.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE_ALL()
];

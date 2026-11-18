import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('substack.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('r')
];

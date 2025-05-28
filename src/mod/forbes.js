import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('forbes.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('sh')
];

import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('wsj.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('mod')
];

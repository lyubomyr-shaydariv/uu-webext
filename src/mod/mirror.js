import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('mirror.co.uk')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('int_source')
];

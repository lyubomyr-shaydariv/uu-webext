import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('elfinanciero.com.mx')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('outputType')
];

import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('elfinanciero.com.mx')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('outputType')
];

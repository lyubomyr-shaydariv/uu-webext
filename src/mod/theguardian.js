import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('theguardian.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('CMP')
];

import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('shutterstock.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('src')
];

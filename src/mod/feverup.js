import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('feverup.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('CAMEFROM')
];

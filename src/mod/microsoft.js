import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('msclkid'),
	RULE()
		.AT().DOMAIN('microsoft.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('icid', 'refd')
];

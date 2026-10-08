import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('epik'),
	RULE()
		.AT().DOMAIN('pinterest.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('rs')
];

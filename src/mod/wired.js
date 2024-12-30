import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('wired.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('intcid')
];

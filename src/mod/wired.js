import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('wired.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('intcid')
];

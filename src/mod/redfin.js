import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('redfin.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('riftinfo')
];

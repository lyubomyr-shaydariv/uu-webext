import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('msn.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('cvid', 'ocid')
];

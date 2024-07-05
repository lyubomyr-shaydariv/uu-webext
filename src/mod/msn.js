import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('msn.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('cvid', 'ocid')
];

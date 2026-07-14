import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('woot.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE(/ref_?/)
];

import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bbc.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('xtor', /^at_[a-z_]+/)
];

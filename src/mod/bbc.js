import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bbc.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('xtor', /^at_[a-z_]+/)
];

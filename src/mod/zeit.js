import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('wt_mc', 'wt_zmc')
];

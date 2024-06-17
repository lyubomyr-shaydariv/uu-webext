import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('eprint.iacr.org')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('ref')
];

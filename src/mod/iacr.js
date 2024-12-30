import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('eprint.iacr.org')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('ref')
];

import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('change.org')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE_ALL()
];

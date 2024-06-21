import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('change.org')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE_ALL()
];

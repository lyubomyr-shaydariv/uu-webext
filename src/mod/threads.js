import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('threads.net')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE_ALL()
];

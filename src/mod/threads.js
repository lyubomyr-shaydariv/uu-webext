import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('threads.net')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE_ALL()
];

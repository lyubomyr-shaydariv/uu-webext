import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('spiegel.de')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE_ALL()
];

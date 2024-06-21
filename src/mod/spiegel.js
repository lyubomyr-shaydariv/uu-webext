import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('spiegel.de')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE_ALL()
];

import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('actionnetwork.org')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('source')
];

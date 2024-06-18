import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('actionnetwork.org')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('source')
];

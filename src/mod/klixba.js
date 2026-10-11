import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('klix.ba')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('widget')
];

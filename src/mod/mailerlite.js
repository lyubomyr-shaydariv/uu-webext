import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('ml_sub', 'ml_sub_hash', 'ml_subscriber', 'ml_subscriber_hash')
];

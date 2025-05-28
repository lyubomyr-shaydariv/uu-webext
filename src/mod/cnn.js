import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('cnn.com', 'cnn.co.jp')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('ref')
];

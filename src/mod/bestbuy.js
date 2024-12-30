import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bestbuy.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('acampID', 'intl', 'loc', 'mpid')
];

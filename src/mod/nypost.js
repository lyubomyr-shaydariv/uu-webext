import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('nypost.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('__twitter_impression')
];

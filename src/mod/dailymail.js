import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('dailymail.co.uk')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('ito', 'reg_source')
];

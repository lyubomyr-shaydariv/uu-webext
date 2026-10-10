import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('zeit.de')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('wt_zmc')
];

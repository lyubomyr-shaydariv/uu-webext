import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('hmb_campaign', 'hmb_medium', 'hmb_source'),
	RULE()
		.AT().DOMAIN('humblebundle.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('partner')
];

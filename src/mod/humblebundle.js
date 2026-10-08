import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('hmb_campaign', 'hmb_medium', 'hmb_source', 'linkID', 'mcID'),
	RULE()
		.AT().DOMAIN('humblebundle.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('partner')
];

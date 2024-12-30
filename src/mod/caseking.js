import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('caseking.de')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('campaign', 'sPartner')
];

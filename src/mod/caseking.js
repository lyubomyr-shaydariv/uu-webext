import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('caseking.de')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('campaign', 'sPartner')
];

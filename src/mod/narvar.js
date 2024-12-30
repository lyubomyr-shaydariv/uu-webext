import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('ctr.narvar.com').PATHNAME(/^\/[^/]+\/tracking\//)
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('destination_country', 'dzip', 'order_number', 'origin_country', 'ozip', 'service')
];

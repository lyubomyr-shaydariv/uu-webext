import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('ICID', 'icid', 'mkt_tok', 'sc_cid', 's_cid')
];

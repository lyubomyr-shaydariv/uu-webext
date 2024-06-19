import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('CFID', 'CFTOKEN', 'ef_id', 'ICID', 'icid', 'mkt_tok', 's_campaign', 's_cid', 's_kwcid')
];

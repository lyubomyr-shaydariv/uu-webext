import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('WT.ac', 'WT.mc_id', 'WT.pn_sku', 'WT.qs_osrc', 'WT.srch')
];

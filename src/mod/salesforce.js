import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('et_cid', 'et_lid', 'et_rid', /^sfmc_.*/)
];

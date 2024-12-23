import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('et_cid', 'et_lid', 'et_rid', /^sfmc_.*/)
];

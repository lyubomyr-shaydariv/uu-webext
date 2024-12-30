import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('mc_cid', 'mc_eid'),
	RULE()
		.AT().DOMAIN('mailchi.mp')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('e')
];

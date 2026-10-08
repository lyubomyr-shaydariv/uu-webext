import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('spotify.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('_branch_match_id', '_branch_referrer', 'context', 'si', 'sp_cid')
];

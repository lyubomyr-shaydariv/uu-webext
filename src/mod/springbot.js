import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('redirect_log_mongo_id', 'redirect_mongo_id', 'sb_referer_host')
];

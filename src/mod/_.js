import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('c_id', 'campaign_id', 'cmpid', 'mbid', 'ncid', 'rb_clickid', 's_cid', 'var', 'ymid')
];

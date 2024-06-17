import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('c_id', 'campaign_id', 'cmpid', 'gdftrk', 'hc_location', 'mbid', 'ncid', 'nr_email_referer', 'rb_clickid', 'rc_fifo', 'rc_col', 'redirect_log_mongo_id', 'redirect_mongo_id', 'trkid', 'ymid', /^trk_.*$/)
];

import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('c_id', 'campaign_id', 'cm_cr', 'cm_mmc', 'cm_me', 'cm_re', 'cm_sp', /^cm_mmca\d+$/, 'cmpid', '_cmp', '_ebid', '_ehid', 'ehid', 'ex_cid', 'hc_location', 'mbid', '_mid', 'ncid', 'nr_email_referer', 'pmcode', 'rb_clickid', 'rc_fifo', 'rc_col', 'sb_referer_host', 'ss_campaign_id', 'ss_campaign_name', 'ss_campaign_sent_date', 'ss_source', 'trkid', 'ymid')
];

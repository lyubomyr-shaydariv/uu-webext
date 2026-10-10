import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('baidu.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('__pc2ps_ab', 'oq', 'p_sign', 'p_signature', 'p_timestamp', 'p_tk', 'rqid', 'rsf', 'rsv_bp', 'rsv_btype', 'rsv_dl', 'rsv_enter', 'rsv_idx', 'rsv_iqid', 'rsv_pq', 'rsv_spt', /rsv_sug[1-9]/, 'rsv_t', 'sa', 'tn', 'usm')
];

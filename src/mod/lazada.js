import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)?lazada\.[^.]+$/)
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('acm', 'ad_src', 'cid', 'clickTrackInfo', 'did', 'laz_trackid', 'mkttid', 'mp', 'pos', 'scm', 'spm', 'trafficFrom')
];

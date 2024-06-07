import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('_hsenc', '_hsmi', '__hsfp', '__hssc', '__hstc', 'hsa_acc', 'hsa_ad', 'hsa_cam', 'hsa_grp', 'hsa_kw', 'hsa_la', 'hsa_mt', 'hsa_net', 'hsa_ol', 'hsa_src', 'hsa_tgt', 'hsa_ver', 'hsCtaTracking')
];

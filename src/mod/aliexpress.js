import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('aff_platform', 'aff_trace_key'),
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)?aliexpress\.[^.]+$/)
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('af', 'aff_request_id', 'algo_expid', 'algo_pvid', 'btsid', 'cv', 'dp', 'expid', 'gps-id', 'initiative_id', 'mall_affr', 'scm_id', 'sk', 'spm', 'terminal_id', 'ws_ab_test')
];

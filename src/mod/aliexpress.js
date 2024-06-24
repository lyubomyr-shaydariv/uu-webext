import {PREFIX} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('aff_platform', 'aff_trace_key'),
	RULE()
		.AT().TLD('aliexpress')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('af', 'aff_fcid', 'aff_fsk', 'aff_platform', 'aff_request_id', 'aff_short_key', 'aff_trace_key', 'algo_expid', 'algo_pvid', 'btsid', 'curPageLogUid', 'cv', 'dp', 'expid', 'gps-id', 'initiative_id', 'mall_affr', 'pdp_npi', 'pvid', 'scm', 'scm_id', 'scm-url', 'sk', 'spm', 'terminal_id', 'utparam', 'ws_ab_test'),
	RULE()
		.AT().HOSTNAME('aliexpress.com').PATHNAME(PREFIX('/item/'))
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('algo_exp_id', 'curPageLogUid', 'pdp_npi')
];

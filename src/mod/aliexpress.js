import {PREFIX} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('aff_platform', 'aff_trace_key'),
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)?aliexpress\.[^.]+$/)
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('_evo_buckets', '_t', 'af', 'afSmartRedirect', 'aff_fcid', 'aff_fsk', 'aff_platform', 'aff_request_id', 'aff_short_key', 'aff_trace_key', 'algo_exp_id', 'algo_expid', 'algo_pvid', 'bizType', 'btsid', 'businessType', 'curPageLogUid', 'cv', 'dp', 'expid', 'fromRankId', 'gatewayAdapt', 'gbraid', 'gps-id', 'initiative_id', 'mall_affr', 'origin', 'pdp_npi', 'pdp_pi', 'platform', 'productId', 'productIds', 'pvid', 'scm', /scm[_a-z-]*/, 'scm-url', 'shareId', 'sk', 'social_params', 'sourceType', 'spm', 'spreadType', 'srcSns', 'tabType', 'terminal_id', 'tpp_rcmd_bucket_id', 'tt', 'utparam', 'widgetId', 'ws_ab_test'),
	RULE()
		.AT().HOSTNAME('aliexpress.com').PATHNAME(PREFIX('/item/'))
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('algo_exp_id', 'curPageLogUid')
];

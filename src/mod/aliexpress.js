import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('af', 'aff_request_id', 'algo_expid', 'algo_pvid', 'btsid', 'cv', 'dp', 'expid', 'gps-id', 'initiative_id', 'mall_affr', 'scm_id', 'sk', 'spm', 'terminal_id', 'ws_ab_test'),
		AT.HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?aliexpress\.[^.]+$/)
	),
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING('aff_platform', 'aff_trace_key')
	)
];
